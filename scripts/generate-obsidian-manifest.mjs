import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const obsidianRoot = path.join(projectRoot, 'src', 'obsidian');
const postsRoot = path.join(obsidianRoot, 'posts');
const imagesRoot = path.join(obsidianRoot, 'attachments', 'images');
const outputPath = path.join(projectRoot, 'src', 'data', 'obsidianManifest.js');
const feedPath = path.join(projectRoot, 'public', 'feed.xml');
const siteUrl = 'https://zhuang-xd.github.io';
const siteTitle = 'Zhuang Xiao Dong';
const siteDescription = '个人技术博客';

const markdownFiles = existsSync(postsRoot) ? getFiles(postsRoot, '.md') : [];
const usedImages = new Map();

const posts = markdownFiles.flatMap((filePath) => {
  const raw = readFileSync(filePath, 'utf8');
  const { attributes } = parseFrontmatter(raw);

  if (!isPublicPost(attributes)) {
    return [];
  }

  collectImages(filePath, raw, usedImages);

  return [{
    path: toImportPath(filePath),
    raw,
    modifiedDate: toDateString(statSync(filePath).mtime),
  }];
});

const imageEntries = [...usedImages.values()].sort((a, b) => a.importPath.localeCompare(b.importPath));
const imports = imageEntries.map((entry, index) => {
  entry.identifier = `image${index}`;
  return `import ${entry.identifier} from ${JSON.stringify(entry.importPath + '?url')};`;
});

const imageMapEntries = imageEntries.flatMap((entry) => {
  return [...entry.keys].sort().map((key) => `  ${JSON.stringify(key)}: ${entry.identifier},`);
});

const output = `${imports.join('\n')}

export const obsidianMarkdownFiles = ${JSON.stringify(posts, null, 2)};

export const obsidianImageFiles = {
${imageMapEntries.join('\n')}
};
`;

mkdirSync(path.dirname(outputPath), { recursive: true });
writeFileSync(outputPath, output, 'utf8');

mkdirSync(path.dirname(feedPath), { recursive: true });
writeFileSync(feedPath, createRssFeed(posts), 'utf8');

function getFiles(directory, extension) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return getFiles(entryPath, extension);
    }

    return entry.isFile() && entry.name.toLowerCase().endsWith(extension) ? [entryPath] : [];
  });
}

function collectImages(markdownPath, raw, images) {
  const markdownImagePattern = /!\[[^\]]*]\(([^)]+)\)/g;
  const obsidianImagePattern = /!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;

  for (const match of raw.matchAll(markdownImagePattern)) {
    addImage(markdownPath, match[1], images, true);
  }

  for (const match of raw.matchAll(obsidianImagePattern)) {
    addImage(markdownPath, match[1], images, false);
  }
}

function addImage(markdownPath, value, images, isMarkdownLink) {
  const cleanValue = cleanImageTarget(value);

  if (!cleanValue || /^(https?:|data:|blob:|#|\/)/i.test(cleanValue)) {
    return;
  }

  const absolutePath = isMarkdownLink
    ? path.resolve(path.dirname(markdownPath), cleanValue)
    : path.resolve(imagesRoot, cleanValue);

  if (!existsSync(absolutePath)) {
    return;
  }

  const importPath = toImportPath(absolutePath);
  const existing = images.get(importPath) || {
    importPath,
    keys: new Set(),
  };

  const relativeToImages = toPosix(path.relative(imagesRoot, absolutePath));
  const fileName = path.basename(absolutePath);

  existing.keys.add(normalizeKey(cleanValue));
  existing.keys.add(relativeToImages);
  existing.keys.add(encodeURI(relativeToImages));
  existing.keys.add(fileName);
  existing.keys.add(encodeURI(fileName));

  images.set(importPath, existing);
}

function cleanImageTarget(value) {
  return safeDecode(value.trim().split(/[?#]/)[0]);
}

function normalizeKey(value) {
  return safeDecode(value)
    .replace(/\\/g, '/')
    .replace(/^(\.\.\/)+attachments\/images\//, '')
    .replace(/^(\.\/)?attachments\/images\//, '')
    .replace(/^images\//, '');
}

function toImportPath(filePath) {
  const relativePath = toPosix(path.relative(path.join(projectRoot, 'src', 'data'), filePath));
  return relativePath.startsWith('.') ? relativePath : `./${relativePath}`;
}

function toPosix(value) {
  return value.replace(/\\/g, '/');
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function toDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function createRssFeed(entries) {
  const items = entries
    .map((entry) => createFeedItem(entry))
    .filter(Boolean)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .slice(0, 20);

  const lastBuildDate = items[0]?.pubDate || new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <link>${siteUrl}/</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>zh-CN</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items.map((item) => item.xml).join('\n')}
  </channel>
</rss>
`;
}

function createFeedItem(entry) {
  const { attributes, body } = parseFrontmatter(entry.raw);

  if (!isPublicPost(attributes)) {
    return null;
  }

  const title = attributes.title || getFirstHeading(body) || getSlug(entry.path);
  const date = attributes.date || getDateFromName(entry.path) || entry.modifiedDate || '';
  const pubDate = toRssDate(date);

  if (!title || !pubDate) {
    return null;
  }

  const slug = getSlug(entry.path);
  const url = `${siteUrl}/#/post/${encodeURIComponent(slug)}`;
  const tags = normalizeTaxonomy(attributes.tags || attributes.tag);
  const description = attributes.description || createExcerpt(body);
  const tagXml = tags
    .map((tag) => `      <category>${escapeXml(tag)}</category>`)
    .join('\n');

  return {
    date,
    pubDate,
    xml: `    <item>
      <title>${escapeXml(title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(description)}</description>
${tagXml}
    </item>`,
  };
}

function isPublicPost(attributes) {
  const isPublic = attributes.public === true || attributes.public === 'true';
  const isDraft = attributes.draft === true || attributes.draft === 'true';

  return isPublic && !isDraft;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

  if (!match) {
    return { attributes: {}, body: raw };
  }

  const attributes = {};
  const lines = match[1].split(/\r?\n/);

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    const separatorIndex = line.indexOf(':');

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    if (value === '') {
      const listValue = parseFrontmatterList(lines, index + 1);

      if (listValue.items.length > 0) {
        attributes[key] = listValue.items;
        index = listValue.endIndex - 1;
        continue;
      }
    }

    attributes[key] = parseFrontmatterValue(value);
  }

  return {
    attributes,
    body: raw.slice(match[0].length),
  };
}

function parseFrontmatterList(lines, startIndex) {
  const items = [];
  let index = startIndex;

  while (index < lines.length) {
    const match = lines[index].match(/^\s+-\s*(.+?)\s*$/);

    if (!match) {
      break;
    }

    items.push(parseFrontmatterValue(match[1]));
    index++;
  }

  return {
    items,
    endIndex: index,
  };
}

function parseFrontmatterValue(value) {
  if (value === 'true') return true;
  if (value === 'false') return false;

  if (value.startsWith('[') && value.endsWith(']')) {
    return value
      .slice(1, -1)
      .split(',')
      .map((item) => stripQuotes(item.trim()))
      .filter(Boolean);
  }

  return stripQuotes(value);
}

function stripQuotes(value) {
  return value.replace(/^['"]|['"]$/g, '');
}

function normalizeTaxonomy(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === 'string') {
    if (value === 'null') {
      return [];
    }

    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function getFirstHeading(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim();
}

function getSlug(importPath) {
  return decodeURIComponent(path.basename(importPath).replace(/\.md$/i, '')).trim();
}

function getDateFromName(filePath) {
  const match = filePath.match(/(20\d{2})[-_]?(\d{2})[-_]?(\d{2})/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : '';
}

function toRssDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '' : date.toUTCString();
}

function createExcerpt(content) {
  return content
    .replace(/^#\s+.+$/m, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, ' ')
    .replace(/!\[[^\]]*]\([^)]+\)/g, ' ')
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, label) => label || target)
    .replace(/\[[^\]]+]\([^)]+\)/g, (match) => match.replace(/^\[|\]\([^)]+\)$/g, ''))
    .replace(/[#>*_`~\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 180);
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

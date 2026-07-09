import MarkdownIt from 'markdown-it';
import { obsidianImageFiles, obsidianMarkdownFiles } from './obsidianManifest';

const markdown = createMarkdownRenderer();

export const obsidianPosts = obsidianMarkdownFiles
  .map(({ path, raw, modifiedDate }) => createPost(path, raw, modifiedDate))
  .filter((post) => post.public && !post.draft)
  .sort((a, b) => comparePostDate(b.date, a.date));

export function getObsidianPostBySlug(slug) {
  return obsidianPosts.find((post) => post.slug === slug);
}

function createPost(path, raw, modifiedDate) {
  const slug = getSlug(path);
  const { attributes, body } = parseFrontmatter(raw);
  const firstHeading = getFirstHeading(body);
  const title = attributes.title || firstHeading || slug;
  const content = removeFirstHeading(body, title);
  const tags = normalizeTags(attributes.tag || attributes.tags);
  const tag = tags.length > 0 ? tags.join(' ') : 'Obsidian';
  const date = attributes.date || getDateFromName(path) || modifiedDate || '';
  const html = markdown.render(normalizeObsidianMarkdown(content));

  return {
    slug,
    title,
    date,
    tag,
    tags: tags.length > 0 ? tags : [tag],
    public: attributes.public === 'true' || attributes.public === true,
    draft: attributes.draft === 'true' || attributes.draft === true,
    star: attributes.star === 'true' || attributes.star === true,
    excerpt: attributes.description || createExcerpt(content),
    url: `#/post/${encodeURIComponent(slug)}`,
    html,
    sourcePath: path,
    isObsidian: true,
  };
}

function createMarkdownRenderer() {
  const md = new MarkdownIt({
    breaks: true,
    html: false,
    linkify: true,
  });

  const defaultImageRenderer = md.renderer.rules.image;

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const srcIndex = token.attrIndex('src');

    if (srcIndex >= 0) {
      token.attrs[srcIndex][1] = resolveAttachmentUrl(token.attrs[srcIndex][1]);
    }

    token.attrSet('loading', 'lazy');
    token.attrSet('decoding', 'async');

    return defaultImageRenderer
      ? defaultImageRenderer(tokens, idx, options, env, self)
      : self.renderToken(tokens, idx, options);
  };

  return md;
}

function normalizeObsidianMarkdown(content) {
  return content
    .replace(/!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, alt = '') => {
      return `![${alt}](${target.trim()})`;
    })
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, label) => {
      return label || target;
    })
    .replace(/\[([^\]]*)\]\(([^)]+\.md(?:\?[^)]*)?)\)/gi, (_, label, url) => {
      const slug = decodeURIComponent(url.replace(/\.md(\?.*)?$/i, '').split('/').pop());
      return `[${label}](#/post/${encodeURIComponent(slug)})`;
    });
}

function resolveAttachmentUrl(src) {
  if (!src || /^(https?:|data:|blob:|#|\/)/i.test(src)) {
    return src;
  }

  const normalized = normalizePath(src)
    .replace(/^(\.\.\/)+attachments\/images\//, '')
    .replace(/^(\.\/)?attachments\/images\//, '')
    .replace(/^images\//, '');

  return obsidianImageFiles[normalized] || obsidianImageFiles[getBaseName(normalized)] || src;
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

function normalizeTags(tags) {
  return normalizeTaxonomy(tags);
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

function removeFirstHeading(content, title) {
  const escapedTitle = escapeRegExp(title);
  return content.replace(new RegExp(`^#\\s+${escapedTitle}\\s*(?:\\r?\\n|$)`), '').trim();
}

function createExcerpt(content) {
  return normalizeObsidianMarkdown(content)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*]\([^)]+\)/g, ' ')
    .replace(/\[[^\]]+]\([^)]+\)/g, (match) => match.replace(/^\[|\]\([^)]+\)$/g, ''))
    .replace(/[#>*_`~\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 180);
}

function getSlug(path) {
  return decodeURIComponent(getBaseName(path).replace(/\.md$/i, '')).trim();
}

function getDateFromName(path) {
  const match = path.match(/(20\d{2})[-_]?(\d{2})[-_]?(\d{2})/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : '';
}

function comparePostDate(a, b) {
  return (a || '0000-00-00').localeCompare(b || '0000-00-00');
}

function normalizePath(path) {
  return safeDecode(path).replace(/\\/g, '/').replace(/^\.\//, '');
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function getBaseName(path) {
  return normalizePath(path).split('/').pop();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

<script setup>
import { onBeforeUnmount, ref, watch } from 'vue';

defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const lightboxImage = ref(null);

function getPostMetaGroups(post) {
  const tagGroup = post.tags?.length ? post.tags.join(' ') : post.tag;
  return [tagGroup].filter(Boolean);
}

function openImagePreview(event) {
  const image = event.target.closest('.markdown-post img');

  if (!image) {
    return false;
  }

  event.preventDefault();
  lightboxImage.value = {
    alt: image.getAttribute('alt') || '',
    src: image.currentSrc || image.src,
  };
  return true;
}

function navigateMarkdownLink(event) {
  const link = event.target.closest('.markdown-post a');
  const rawHref = link?.getAttribute('href') || '';

  if (!rawHref || !/\.md(?:[?#].*)?$/i.test(rawHref)) {
    return false;
  }

  const slug = getMarkdownSlug(rawHref);

  if (!slug) {
    return false;
  }

  event.preventDefault();
  window.location.hash = `#/post/${encodeURIComponent(slug)}`;
  return true;
}

function getMarkdownSlug(href) {
  const cleanHref = href.split('#')[0].split('?')[0];
  const filename = cleanHref.split('/').pop();

  if (!filename) {
    return '';
  }

  try {
    return decodeURIComponent(filename.replace(/\.md$/i, '')).trim();
  } catch {
    return filename.replace(/\.md$/i, '').trim();
  }
}

function handlePostClick(event) {
  if (openImagePreview(event)) {
    return;
  }

  navigateMarkdownLink(event);
}

function closeImagePreview() {
  lightboxImage.value = null;
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    closeImagePreview();
  }
}

watch(lightboxImage, (image) => {
  document.body.classList.toggle('image-lightbox-open', Boolean(image));
});

window.addEventListener('keydown', handleKeydown);

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.classList.remove('image-lightbox-open');
});
</script>

<template>
  <article class="post-container post-container--single">
    <header class="post-header">
      <div class="post-meta">
        <time v-if="post.date" :datetime="post.date" class="post-meta__date date">{{ post.date }}</time>
        <span
          v-for="(group, index) in getPostMetaGroups(post)"
          :key="`${group}-${index}`"
          class="post-meta__tags tags"
        >
          <span aria-hidden="true">&bull;</span>{{ group }}
        </span>
      </div>
      <h1 class="post-title">{{ post.title }}</h1>
    </header>

    <section class="post markdown-post" @click="handlePostClick" v-html="post.html"></section>

    <p class="post-back">
      <a href="/#blog">返回博客列表</a>
    </p>
  </article>

  <Teleport to="body">
    <div v-if="lightboxImage" class="image-lightbox" role="dialog" aria-modal="true" @click="closeImagePreview">
      <button class="image-lightbox__close" type="button" aria-label="Close image preview" @click="closeImagePreview">
        &times;
      </button>
      <img class="image-lightbox__image" :src="lightboxImage.src" :alt="lightboxImage.alt" @click.stop>
    </div>
  </Teleport>
</template>

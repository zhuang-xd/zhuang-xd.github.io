<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import SiteCover from './components/SiteCover.vue';
import BlogList from './components/BlogList.vue';
import TagPage from './components/TagPage.vue';
import StarPage from './components/StarPage.vue';
import MarkdownPost from './components/MarkdownPost.vue';
import AppFooter from './components/AppFooter.vue';
import { getObsidianPostBySlug } from './data/obsidianPosts';

const BLOG_SCROLL_KEY = 'blog_scroll_position';

normalizeMarkdownPath();

const view = ref(resolveView());
const postSlug = ref(resolvePostSlug());
const menuOpen = ref(false);
const contentReady = ref(view.value !== 'home');
let contentTimer = 0;

const isCollapsed = computed(() => view.value !== 'home');
const shouldShowContent = computed(() => isCollapsed.value && contentReady.value);
const activePost = computed(() => (postSlug.value ? getObsidianPostBySlug(postSlug.value) : null));

function resolveView() {
  if (resolvePostSlug()) {
    return 'post';
  }

  if (window.location.pathname.startsWith('/tag') || window.location.hash === '#tag') {
    return 'tag';
  }

  if (window.location.pathname.startsWith('/star') || window.location.hash === '#star') {
    return 'star';
  }

  if (window.location.hash === '#blog') {
    return 'blog';
  }

  return 'home';
}

function resolvePostSlug() {
  const hash = window.location.hash || '';

  if (!hash.startsWith('#/post/')) {
    return '';
  }

  return safeDecode(hash.replace('#/post/', '').replace(/\/$/, ''));
}

function normalizeMarkdownPath() {
  const markdownMatch = window.location.pathname.match(/\/([^/]+)\.md$/i);

  if (!markdownMatch) {
    return;
  }

  const slug = safeDecode(markdownMatch[1]).trim();

  if (slug) {
    history.replaceState({}, '', `/#/post/${encodeURIComponent(slug)}`);
  }
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function showBlog() {
  navigateToView('blog', '', '/#blog');
}

function showTags() {
  navigateToView('tag', '', '/tag/');
}

function showStar() {
  navigateToView('star', '', '/star/');
}

function syncRoute() {
  navigateToView(resolveView(), resolvePostSlug());
}

function restoreBlogScroll() {
  nextTick(() => {
    const saved = sessionStorage.getItem(BLOG_SCROLL_KEY);
    if (saved) {
      window.scrollTo(0, parseInt(saved, 10));
      sessionStorage.removeItem(BLOG_SCROLL_KEY);
    }
  });
}

function scrollToPageTop() {
  nextTick(() => {
    window.scrollTo(0, 0);
  });
}

function handleContentReady(nextView) {
  if (nextView === 'blog') {
    restoreBlogScroll();
    return;
  }

  scrollToPageTop();
}

function navigateToView(nextView, nextPostSlug = '', nextUrl = '') {
  const wasHome = view.value === 'home';

  if (view.value === 'blog' && nextView !== 'blog') {
    sessionStorage.setItem(BLOG_SCROLL_KEY, window.scrollY.toString());
  }

  window.clearTimeout(contentTimer);
  view.value = nextView;
  postSlug.value = nextPostSlug;
  menuOpen.value = false;

  if (nextUrl) {
    history.pushState({}, '', nextUrl);
  }

  if (nextView === 'home') {
    contentReady.value = false;
    return;
  }

  if (!wasHome) {
    contentReady.value = true;
    handleContentReady(nextView);
    return;
  }

  contentReady.value = false;
  contentTimer = window.setTimeout(() => {
    contentReady.value = true;
    handleContentReady(nextView);
  }, 420);
}

onMounted(() => {
  window.addEventListener('popstate', syncRoute);
  window.addEventListener('hashchange', syncRoute);
});

onBeforeUnmount(() => {
  window.removeEventListener('popstate', syncRoute);
  window.removeEventListener('hashchange', syncRoute);
  window.clearTimeout(contentTimer);
});
</script>

<template>
  <SiteCover
    :collapsed="isCollapsed"
    :menu-open="menuOpen"
    @toggle-menu="menuOpen = !menuOpen"
    @show-blog="showBlog"
    @show-tags="showTags"
    @show-star="showStar"
  />

  <main class="content-wrapper" :class="{ 'content-wrapper--visible': shouldShowContent }">
    <div v-if="contentReady" class="content-wrapper__inner">
      <BlogList v-if="view === 'blog'" />
      <TagPage v-else-if="view === 'tag'" />
      <StarPage v-else-if="view === 'star'" />
      <MarkdownPost v-else-if="view === 'post' && activePost" :post="activePost" />
      <BlogList v-else-if="view === 'post'" />
      <AppFooter v-if="isCollapsed" />
    </div>
  </main>
</template>

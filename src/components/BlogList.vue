<script setup>
import { computed, ref } from 'vue';
import { Search, X } from 'lucide-vue-next';
import { posts } from '../data/posts';

const POSTS_PER_PAGE = 10;
const searchText = ref('');
const currentPage = ref(1);

const normalizedSearchText = computed(() => searchText.value.trim().toLowerCase());
const isSearching = computed(() => normalizedSearchText.value.length > 0);

const filteredPosts = computed(() => {
  if (!normalizedSearchText.value) {
    return posts;
  }
  return posts.filter((post) => {
    return [post.title, post.excerpt, post.tag, post.date]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
      .includes(normalizedSearchText.value)
      ;
  });
});

const totalPages = computed(() => Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE)));
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * POSTS_PER_PAGE;
  return filteredPosts.value.slice(start, start + POSTS_PER_PAGE);
});

function goPrevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function goNextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function clearSearch() {
  currentPage.value = 1;
  searchText.value = '';
}

function getPostMetaGroups(post) {
  const tagGroup = post.tags?.length ? post.tags.join(' ') : post.tag;
  return [tagGroup].filter(Boolean);
}
</script>

<template>
  <section class="main-post-list" aria-label="博客文章">
    <div class="post-search" role="search">
      <label class="sr-only" for="post-search-input">搜索文章</label>
      <Search class="post-search__icon" :size="18" aria-hidden="true" />
      <input
        id="post-search-input"
        v-model="searchText"
        class="post-search__input"
        type="search"
        autocomplete="off"
        placeholder="搜索标题、标签或摘要"
      />
      <button
        v-if="isSearching"
        class="post-search__clear"
        type="button"
        title="清空搜索"
        aria-label="清空搜索"
        @click="clearSearch"
      >
        <X :size="16" aria-hidden="true" />
      </button>
    </div>

    <p v-if="isSearching" class="post-search__summary">
      找到 {{ filteredPosts.length }} 篇相关文章
    </p>

    <ol class="post-list">
      <li v-for="post in paginatedPosts" :key="post.url">
        <h2 class="post-list__post-title post-title">
          <a :href="post.url" :title="`访问 ${post.title}`">{{ post.title }}</a>
        </h2>

        <p class="excerpt">{{ post.excerpt }}&hellip;</p>

        <div class="post-list__meta">
          <time v-if="post.date" :datetime="post.date" class="post-list__meta--date date">{{ post.date }}</time>
          <span
            v-for="(group, index) in getPostMetaGroups(post)"
            :key="`${group}-${index}`"
            class="post-list__meta--tags tags"
          >
            <span aria-hidden="true">&bull;</span>{{ group }}
          </span>
          <a class="btn-border-small" :href="post.url">继续阅读</a>
        </div>

        <hr class="post-list__divider" />
      </li>
    </ol>

    <p v-if="filteredPosts.length === 0" class="post-search__empty">
      没有找到匹配的文章。
    </p>

    <hr v-if="!isSearching" class="post-list__divider" />

    <nav v-if="totalPages > 1 && !isSearching" class="pagination" role="navigation" aria-label="分页">
      <button
        v-if="currentPage > 1"
        class="newer-posts pagination__newer btn btn-small btn-tertiary"
        type="button"
        @click="goPrevPage"
      >&larr; 上一页</button>
      <span class="pagination__page-number">{{ currentPage }} / {{ totalPages }}</span>
      <button
        v-if="currentPage < totalPages"
        class="older-posts pagination__older btn btn-small btn-tertiary"
        type="button"
        @click="goNextPage"
      >下一页 &rarr;</button>
    </nav>
  </section>
</template>

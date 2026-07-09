<script setup>
import { computed } from 'vue';
import { Star } from 'lucide-vue-next';
import { posts } from '../data/posts';

const starredPosts = computed(() => {
  return posts
    .filter((post) => post.star)
    .map((post) => ({
      title: post.title,
      href: post.url,
      date: post.date,
    }))
    .sort((a, b) => (b.date || '0000-00-00').localeCompare(a.date || '0000-00-00'));
});
</script>

<template>
  <article class="post-container post-container--single">
    <header class="post-header">
      <div class="post-meta"></div>
      <h1 class="post-title">
        <Star :size="24" class="star-icon" aria-hidden="true" />
        收藏
      </h1>
    </header>

    <section class="post star-post">
      <p v-if="starredPosts.length === 0" class="star-empty">暂无收藏文章。</p>
      <section v-else class="star-group">
        <ul>
          <li v-for="item in starredPosts" :key="item.href">
            <a :href="item.href">{{ item.title }}</a>
            <time v-if="item.date" :datetime="item.date" class="star-date">{{ item.date }}</time>
          </li>
        </ul>
      </section>
    </section>
  </article>
</template>

<style scoped>
.star-icon {
  vertical-align: middle;
  margin-right: 8px;
}

.star-date {
  margin-left: 12px;
  font-size: 0.85em;
  color: var(--color-muted, #999);
}

.star-empty {
  color: var(--color-muted, #999);
  text-align: center;
  padding: 2em 0;
}
</style>

<script setup>
import { computed } from 'vue';
import { posts } from '../data/posts';

const tagGroups = computed(() => {
  const groups = new Map();

  posts.forEach((post) => {
    getPostTags(post).forEach((tag) => {
      if (!groups.has(tag)) {
        groups.set(tag, []);
      }

      groups.get(tag).push({
        title: post.title,
        href: post.url,
        date: post.date,
      });
    });
  });

  return [...groups.entries()]
    .map(([title, items]) => ({
      title,
      items: items.sort((a, b) => (b.date || '0000-00-00').localeCompare(a.date || '0000-00-00')),
    }))
    .sort((a, b) => a.title.localeCompare(b.title, 'zh-Hans-CN'));
});

function getPostTags(post) {
  if (post.tags?.length) {
    return post.tags;
  }

  if (post.tag) {
    return post.tag.split(/[,\s]+/).filter(Boolean);
  }

  return [];
}
</script>

<template>
  <article class="post-container post-container--single">
    <header class="post-header">
      <div class="post-meta">
      </div>
      <h1 class="post-title">标签</h1>
    </header>

    <section class="post tag-post">
      <section v-for="group in tagGroups" :key="group.title" class="tag-group">
        <h2>{{ group.title }}</h2>
        <ul>
          <li v-for="item in group.items" :key="item.href">
            <a :href="item.href">{{ item.title }}</a>
          </li>
        </ul>
      </section>
    </section>
  </article>
</template>

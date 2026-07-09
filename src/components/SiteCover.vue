<script setup>
import { ChevronUp, Github, Mail, Menu, Rss } from 'lucide-vue-next';

defineProps({
  collapsed: {
    type: Boolean,
    required: true,
  },
  menuOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['toggle-menu', 'show-blog', 'show-tags', 'show-star']);
</script>

<template>
  <button class="btn-mobile-menu" type="button" :aria-expanded="menuOpen" @click="emit('toggle-menu')">
    <ChevronUp v-if="menuOpen" :size="18" aria-hidden="true" />
    <Menu v-else :size="18" aria-hidden="true" />
    <span class="sr-only">切换导航</span>
  </button>

  <header
    class="panel-cover"
    :class="{ 'panel-cover--collapsed': collapsed }"
    style="background-image: url('/assets/images/background-cover.jpg')"
  >
    <div class="panel-main">
      <div class="panel-main__inner panel-inverted">
        <div class="panel-main__content">
          <a href="/#blog" title="前往 Zhuang Xiao Dong 的主页" class="blog-button" @click.prevent="emit('show-blog')">
            <img
              src="/assets/images/avatar.gif"
              width="100"
              height="100"
              alt="Zhuang Xiao Dong logo"
              class="panel-cover__logo logo"
            />
          </a>

          <h1 class="panel-cover__title panel-title">
            <a href="/#blog" class="blog-button" @click.prevent="emit('show-blog')">Zhuang Xiao Dong</a>
          </h1>

          <span class="panel-cover__subtitle panel-subtitle">个人技术博客</span>

          <hr class="panel-cover__divider" />
          <p class="panel-cover__description">嗨，我是庄晓栋，一名嵌入式开发者。</p>
          <hr class="panel-cover__divider panel-cover__divider--secondary" />
          <p class="panel-cover__description">主要是记录个人对技术的理解和开发过程中遇到的问题，欢迎了解更多。</p>

          <div class="navigation-wrapper" :class="{ visible: menuOpen }">
            <nav class="cover-navigation cover-navigation--primary" aria-label="主导航">
              <ul class="navigation">
                <li class="navigation__item">
                  <a href="/#blog" title="访问博客" class="blog-button" @click.prevent="emit('show-blog')">博客</a>
                </li>
                <li class="navigation__item">
                  <a href="/tag/" title="技术文章分类" class="blog-button" @click.prevent="emit('show-tags')">标签</a>
                </li>
                <li class="navigation__item">
                  <a href="/star/" title="收藏的文章" class="blog-button" @click.prevent="emit('show-star')">收藏</a>
                </li>
                <li class="navigation__item">
                  <a href="https://github.com/zhuang-xd" target="_blank" rel="noreferrer" title="个人代码">Git</a>
                </li>
              </ul>
            </nav>

            <nav class="cover-navigation navigation--social" aria-label="社交链接">
              <ul class="navigation">
                <li class="navigation__item">
                  <a href="https://github.com/zhuang-xd" title="@limeii 的 Github" target="_blank" rel="noreferrer">
                    <Github :size="22" aria-hidden="true" />
                    <span class="label">Github</span>
                  </a>
                </li>
                <li class="navigation__item">
                  <a href="/feed.xml" rel="alternate" type="application/rss+xml" title="RSS" target="_blank">
                    <Rss :size="22" aria-hidden="true" />
                    <span class="label">RSS</span>
                  </a>
                </li>
                <li class="navigation__item">
                  <a href="mailto:xiaodong.zhuang@hotmail.com" title="Contact me">
                    <Mail :size="22" aria-hidden="true" />
                    <span class="label">Email</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div class="panel-cover--overlay cover-slate"></div>
    </div>
  </header>
</template>

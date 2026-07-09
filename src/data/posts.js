import { obsidianPosts } from './obsidianPosts';

export const legacyPosts = [
  {
    title: 'Angular:深入了解NgRx的优势',
    url: '/2024/07/ngrx-introduction/',
    date: '2024-07-10',
    tag: 'Angular',
    excerpt:
      '最近在项目组里做了一个 session 分享怎么用 NgRx，以及 NgRx 的优势是什么。大家反馈很不错，写篇文章记录下这次的分享内容。在这篇文件里会介绍以下内容：什么是 NgRx，结合 Demo 代码介绍 NgRX 的基本用法，从函数编程的角度来看 NgRx 的优势是什么',
  },
  {
    title: 'Angular：Ivy',
    url: '/2024/06/angular-ivy/',
    date: '2024-06-15',
    tag: 'Angular',
    excerpt:
      '最近做了个 Angular 升级项目，从 Angular8 升级到 Angular12，发现 Angular9 默认使用了 Ivy 模板引擎和 AOT 编译方式。升级项目结束以后，花时间看了下 Ivy 的相关介绍，写篇文章记录下学习成果',
  },
  {
    title: 'Angular：性能优化清单',
    url: '/2024/05/angular-performance-checklists/',
    date: '2024-05-28',
    tag: 'Angular',
    excerpt:
      '性能优化主要是从两方面入手，一个是网络性能，另一个是页面渲染。在具体介绍性能优化方式之前，先来解释下为什么网络性能和页面渲染会影响性能，并讨论 HTTP/1.X 下连接方式对资源加载的影响',
  },
  {
    title: 'Angular：深入理解Angular编译机制',
    url: '/2023/08/angular-compiler/',
    date: '2023-08-28',
    tag: 'Angular',
    excerpt:
      '这篇文章会介绍为什么 Angular 需要编译，Angular 编译机制 JiT 与 AoT，AoT 的工作原理以及 AoT 对性能的影响。内容基于 Angular8 和 View Engine 模板引擎',
  },
  {
    title: 'RxJS：如何用 RxJS 实现高效的 HTTP 请求',
    url: '/2023/07/rxjs-searchable-input/',
    date: '2023-07-23',
    tag: 'RxJS',
    excerpt:
      '在项目中经常会碰到这样的需求：用户在输入框输入数据，需要实时调用后端 API 并显示结果。文章围绕频繁输入导致的重复请求、响应顺序和体验问题，介绍如何用 RxJS 更高效地处理',
  },
  {
    title: 'RxJS：所有订阅都需要调用 unsubscribe 取消订阅？',
    url: '/2023/02/rxjs-unsubscribe/',
    date: '2023-02-16',
    tag: 'RxJS',
    excerpt:
      '最开始用 RxJS 的时候，常常会疑惑每一个 Subscription 是否都必须手动 unsubscribe。文章从 Subscription 的概念入手，整理不同场景下订阅释放的判断方式',
  },
  {
    title: 'Angular性能优化：Tree Shaking',
    url: '/2022/06/angular-tree-shaking/',
    date: '2022-06-20',
    tag: 'Angular',
    excerpt:
      '文章介绍什么是 Tree Shaking 以及它对性能的影响，如何让 Angular 6.0+ 的 Service 实现 Tree Shaking，以及在 webpack4 项目中怎样优化无用代码消除',
  },
  {
    title: 'RxJS：如何通过 RxJS 实现简单的消息通知机制',
    url: '/2022/03/rxjs-notification/',
    date: '2022-03-15',
    tag: 'RxJS',
    excerpt:
      '在上一篇缓存文章之后，这篇继续讨论 API 返回值会随时间变化的场景。文章从用户体验出发，介绍如何先显示数据更新通知，再让用户选择是否刷新页面内容',
  },
  {
    title: 'RxJS：如何通过 RxJS 实现缓存',
    url: '/2022/02/rxjs-caching/',
    date: '2022-02-12',
    tag: 'RxJS',
    excerpt:
      '文章介绍 Angular 中 HttpClient 返回的 Observables 是 Cold Observable，每次订阅都会触发 HTTP request，并说明如何通过 ReplaySubject 缓存 API Response 数据来提升性能',
  },
  {
    title: 'RxJS：四种 Subject 的用法和区别',
    url: '/2021/07/rxjs-subject/',
    date: '2021-07-25',
    tag: 'RxJS',
    excerpt:
      '在 RxJS 中有四种 Subject：Subject、BehaviorSubject、AsyncSubject 和 ReplaySubject。文章先从它们与普通 Observable 的区别讲起，再展开各自的用法和适用场景',
  },
];

export const posts = [...obsidianPosts,].sort((a, b) => {
  return (b.date || '0000-00-00').localeCompare(a.date || '0000-00-00');
});

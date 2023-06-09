import { sidebar } from "./configs/AutoNavSidebar";
import nav from "./configs/nav"
import timeline from "vitepress-markdown-timeline";

//vitepress官方文档 https://vitepress.dev/guide/what-is-vitepress


// import { defineConfig } from 'vitepress'

// export default defineConfig({
//   themeConfig: {
//     search: {
//       provider: 'local'
//     }
//   }
// })


export default {
    ignoreDeadLinks: true, //忽略死链
    base: '/',
    title: 'blog', // 所有文档的浏览器标签title
    description: '晓栋的博客', // 会渲染成<meta>标签，SEO用
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.ico' }], //标题图标
    ],
    lastUpdated: true, // 是否更新最后更新时间,默认true
    themeConfig: {
        siteTitle: '晓栋\'s blog',
        logo: '/images/logo.gif', // 如果放在public目录下可以直接 /logo.
        nav: nav,
        sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/zhuang-xd' },
        ],
        search: {
            provider: 'local'
        }
    },
    // 插件
    markdown: {
        config: (md) => {
            md.use(timeline);
        },
    },
}
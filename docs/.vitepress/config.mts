import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue-library-start',
  description: '基于 vite 的 二次组件库开发框架',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '教程',
        items: [
          { text: '快速开始', link: '/getting-started' },
          { text: '开发规范', link: '/development-specifications' },
          { text: 'UI库二次开发', link: '/ui-examples' },
          { text: '拓展开发', link: '/more-develop' },
          { text: '自动导入', link: '/auto-import' },
        ],
      },
      {
        text: '组件',
        items: [{ text: 'Avatar 头像', link: '/components/avatar' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yyues/vue-library-start' },
    ],
  },
  vite: {
    server: {
      port: 10024,
    },
  },
});


import { defineConfig } from "vitepress";
import { head, nav, sidebar } from './configs'

// 主題 配置
const themeConfig = {
  logo: '/apple-touch-icon.png',
  siteTitle: 'Vue 閱讀筆記',
  
  nav,
  sidebar,

  // socialLinks: [
  //   { icon: 'github', link: 'https://github.com/gumingWu/vitepress-fun' }
  // ],
  footer: {
    copyright: 'MIT Lincensed | Copyright © 2023-present Eason',
  }
}

// markdown 配置
const markdown = {
  lineNumbers: true
}

export default defineConfig({
  base: '/vitepress-vue/',   // 站點將部署在這個 base URL路徑
  lang: 'zh-TW',
  title: 'Vue',
  description: '閱讀筆記',
  head,
  themeConfig,
  markdown,
  vite: {
    server: {
      port: 8504
    }
  }
})
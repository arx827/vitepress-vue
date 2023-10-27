export const sidebar = {
  '/docVue/': [
    {
      text: 'Vue3',
      items: [
        { text: 'Vue2.x 轉 Vue3.x', link: '/docVue/vue2_to_vue3' },
      ],
    },
  ],
  '/docPlugin/echarts': [
    {
      text: '資料視覺化 - ECharts',
      items: [
        {
          text: 'ECharts',
          link: '/docPlugin/echarts/echarts',
        },
      ]
    },
    {
      text: 'API',
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: 'echarts',
          link: '/docPlugin/echarts/echarts-api-echarts',
        },
        {
          text: 'echartsInstance',
          link: '/docPlugin/echarts/echarts-api-echartsInstance',
        },
        {
          text: 'action',
          link: '/docPlugin/echarts/echarts-api-action',
        },
        {
          text: 'events',
          link: '/docPlugin/echarts/echarts-api-events',
        }
      ]
    },
  ],
  '/docPlugin/vxe-table': [
    {
      text: '表格',
      items: [
        {
          text: 'vxe-table V4.5 +',
          items: [
            { text: '開發指南', link: '/docPlugin/vxe-table/vxe-table' },
            { text: '功能組件', link: '/docPlugin/vxe-table/vxe-table-module' },
            { text: '表單', link: '/docPlugin/vxe-table/vxe-table-form' },
            { text: '基礎表格', link: '/docPlugin/vxe-table/vxe-table-basic' },
            { text: '複雜表格', link: '/docPlugin/vxe-table/vxe-table-advanced' },
            { text: '樹形表格', link: '/docPlugin/vxe-table/vxe-table-tree' },
            { text: '編輯表格', link: '/docPlugin/vxe-table/vxe-table-edit' },
            { text: '高級表格', link: '/docPlugin/vxe-table/vxe-table-grid' },
            { text: '虛擬滾動', link: '/docPlugin/vxe-table/vxe-table-scroll' },
            { text: '(擴展)插件庫', link: '/docPlugin/vxe-table/vxe-table-other4' },
            { text: '(全域)格式化', link: '/docPlugin/vxe-table/vxe-table-formats' },
            { text: '(全域)指令註冊', link: '/docPlugin/vxe-table/vxe-table-commands' },
            { text: '(全域)右鍵選單', link: '/docPlugin/vxe-table/vxe-table-menus' },
            { text: '(全域)校驗器', link: '/docPlugin/vxe-table/vxe-table-validators' },
            { text: '(高級用法)渲染器', link: '/docPlugin/vxe-table/vxe-table-renderer' },
            { text: '(高級用法)事件攔截', link: '/docPlugin/vxe-table/vxe-table-interceptor' },
            { text: 'API', link: '/docPlugin/vxe-table/vxe-table-api' },
          ]
        },
      ]
    },
  ],
  '/docTypeScript/typeScript': [
    {
      text: 'TypeScript',
      items: [
        {
          text: '第一篇 TypeScript 入門準備',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '01 你的第一個 TypeScript 應用程式', link: '/docTypeScript/typeScript-1' },
            { text: '02 認識 TypeScript 及 本書內容', link: '/docTypeScript/typeScript-2' },
            { text: '03 JavaScript 快速入門(上)', link: '/docTypeScript/typeScript-3' },
            { text: '04 JavaScript 快速入門(下)', link: '/docTypeScript/typeScript-4' },
            { text: '05 使用 TypeScript 編譯器', link: '/docTypeScript/typeScript-5' },
            { text: '06 TypeScript 程式的測試與除錯', link: '/docTypeScript/typeScript-6' },
          ]
        },
        {
          text: '第二篇 TypeScript 徹底解析',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '07 了解 TypeScript 的靜態型別', link: '/docTypeScript/typeScript-7' },
            { text: '08 在 TypeScript 使用函式', link: '/docTypeScript/typeScript-8' },
            { text: '09 在 TypeScript 使用陣列、tuple 與列舉', link: '/docTypeScript/typeScript-9' },
            { text: '10 在 TypeScript 運用物件', link: '/docTypeScript/typeScript-10' },
            { text: '11 在 TypeScript 使用類別與介面', link: '/docTypeScript/typeScript-11' },
            { text: '12 在 TypeScript 使用泛型', link: '/docTypeScript/typeScript-12' },
            { text: '13 TypeScript 的進階泛型功能', link: '/docTypeScript/typeScript-13' },
            { text: '14 在 TypeScript 專案中混用 JavaScript', link: '/docTypeScript/typeScript-14' },
          ]
        },
        {
          text: '第三篇 TypeScript 實戰攻略',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '15 打造獨立網路應用程式(上)', link: '/docTypeScript/typeScript-15' },
            { text: '16 打造獨立網路應用程式(下)', link: '/docTypeScript/typeScript-16' },
            { text: '17 打造 Angular 網路應用程式(上)', link: '/docTypeScript/typeScript-17' },
            { text: '18 打造 Angular 網路應用程式(下)', link: '/docTypeScript/typeScript-18' },
            { text: '19 打造 React 網路應用程式(上)', link: '/docTypeScript/typeScript-19' },
            { text: '20 打造 React 網路應用程式(下)', link: '/docTypeScript/typeScript-20' },
            { text: '21 打造 Vue.js 網路應用程式(上)', link: '/docTypeScript/typeScript-21' },
            { text: '22 打造 Vue.js 網路應用程式(下)', link: '/docTypeScript/typeScript-22' },
          ]
        },
        {
          text: '電子書',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '打造 Svelte 網路應用程式', link: '/docTypeScript/typeScript-e-book' },
          ]
        }
      ]
    }
  ]
}
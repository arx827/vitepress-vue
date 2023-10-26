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
}
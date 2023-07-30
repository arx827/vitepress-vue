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
        { text: '附錄一：JDK安裝', link: '/guide/edu/appendix_1' },
      ]
    },
  ],
}
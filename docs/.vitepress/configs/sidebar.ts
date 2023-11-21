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
  '/docJavaScript/javaScript': [
    {
      text: 'JavaScript',
      items: [
        {
          text: '第一篇 - ECMAScript 版本發展歷程',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '01 你的第一個 JavaScript 應用程式', link: '/docJavaScript/javaScript-1' },
            // { text: '02 認識 TypeScript 及 本書內容', link: '/docTypeScript/typeScript-2' },
            // { text: '03 JavaScript 快速入門(上)', link: '/docTypeScript/typeScript-3' },
            // { text: '04 JavaScript 快速入門(下)', link: '/docTypeScript/typeScript-4' },
            // { text: '05 使用 TypeScript 編譯器', link: '/docTypeScript/typeScript-5' },
            // { text: '06 TypeScript 程式的測試與除錯', link: '/docTypeScript/typeScript-6' },
          ]
        },
        {
          text: '第二篇 - ES2015 能為實際開發帶來什麼',
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
          text: '第三篇 - ES2015 新語法詳解',
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
          text: '第四篇 - ES2015 的前端咖發實戰',
        },
        {
          text: '第五篇 - ES2015 的 Node.js 開發實戰',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '5-1 Duel Living 的功能規劃', link: '/docJavaScript/javaScript-5-1' },
            { text: '5-2 資料層開發', link: '/docJavaScript/javaScript-5-2' },
            { text: '5-3 服務端基本架構開發', link: '/docJavaScript/javaScript-5-3' },
            { text: '5-4 API 開發', link: '/docJavaScript/javaScript-5-4' },
            { text: '5-5 直播網路', link: '/docJavaScript/javaScript-5-5' },
            { text: '5-6 直播間用戶端', link: '/docJavaScript/javaScript-5-6' },
            { text: '5-7 部署應用', link: '/docJavaScript/javaScript-5-7' },
            { text: '5-8 小結', link: '/docJavaScript/javaScript-5-8' },
          ]
        },
        {
          text: '第六篇 - ES2016 標準',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '6-1 Array.prototype.includes', link: '/docJavaScript/javaScript-6-1' },
            { text: '6-2 冪運算子', link: '/docJavaScript/javaScript-6-2' },
            { text: '6-3 小結', link: '/docJavaScript/javaScript-6-3' },
          ]
        },
        {
          text: '第七篇 - 展望更遠的未來',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '7-1 async / await', link: '/docJavaScript/javaScript-7-1' },
            { text: '7-2 Decorators', link: '/docJavaScript/javaScript-7-2' },
            { text: '7-3 函數綁定', link: '/docJavaScript/javaScript-7-3' },
            { text: '7-4 小結', link: '/docJavaScript/javaScript-7-4' },
          ]
        },
        {
          text: 'A - 其他 ES2015 新特性',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'A-1 String 字串', link: '/docJavaScript/javaScript-A-1' },
            { text: 'A-2 Array 陣列', link: '/docJavaScript/javaScript-A-2' },
            { text: 'A-3 Object 物件', link: '/docJavaScript/javaScript-A-3' },
          ]
        },
      ]
    }
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
  ],
  '/docNodejs/hahow/': [
    {
      text: 'Node.js、MongoDB 網站後端工程入門',
      items: [
        {
          text: '課程連結',
          link: 'https://hahow.in/courses/60aeac37bca91777bf5bb114/discussions?item=60d37e07638ed0acdd8c5c40'
        },
        {
          text: '第一章 課前準備',
          link: '/docNodejs/hahow/nodejs-1',
        },
        {
          text: '第二章 Node.js 基礎',
          link: '/docNodejs/hahow/nodejs-2',
        }
      ]
    }
  ],
  '/docFubon/project_management/': [
    {
      text: '專案管理實戰：搞定難題，讓專案成功的14堂課',
      items: [
        {
          text: '01 緒論：想在職場翻身，必備的專案管理力',
          link: '/docFubon/project_management/project_management-01'
        },
        {
          text: '02 談能力：培養問題解決力，帶你跨出舒適圈',
          link: '/docFubon/project_management/project_management-02'
        },
        {
          text: '03 談結盟：非正式協商策略，搞定沒被說出口的考量',
          link: '/docFubon/project_management/project_management-03'
        },
        {
          text: '04 談需求：雙向對焦，把事情做好又做對',
          link: '/docFubon/project_management/project_management-04'
        },
        {
          text: '05 談溝通：向上管理你的老闆與客戶',
          link: '/docFubon/project_management/project_management-05'
        },
        {
          text: '06 談雙贏： 3 個心法讓別人願意跟你合作',
          link: '/docFubon/project_management/project_management-06'
        },
        {
          text: '07 談執行：建立大局觀，將大目標拆解成小任務',
          link: '/docFubon/project_management/project_management-07'
        },
        {
          text: '08 談績效： 3 個目標設定心法，讓員工更當責',
          link: '/docFubon/project_management/project_management-08'
        },
        {
          text: '09 談金錢：爭取與排序，破除專案資源限制',
          link: '/docFubon/project_management/project_management-09'
        },
        {
          text: '10 談綜效：雙軌槓桿效應，用5分力氣做到10分成果',
          link: '/docFubon/project_management/project_management-10'
        },
        {
          text: '11 談時間：15 分鐘高效管理術從此專案不 Delay',
          link: '/docFubon/project_management/project_management-11'
        },
        {
          text: '12 談風險：盤點、決策、控管及改善 4 步驟有效化解危機',
          link: '/docFubon/project_management/project_management-12'
        },
        {
          text: '13 談創新：3 個練習帶你跳脫框架，超越期待',
          link: '/docFubon/project_management/project_management-13'
        },
        {
          text: '14 談突圍：培養逆境智商，到哪都能發光',
          link: '/docFubon/project_management/project_management-14'
        },
      ]
    }
  ],
  '/docFubon/thinking_And_Analysis/': [
    {
      text: '清晰思考與分析',
      items: [
        {
          text: 'CH1 何謂清晰思考',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-01'
        },
        {
          text: 'CH2 問題分析常見方法與基本概念',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-02'
        },
        {
          text: 'CH3 遊戲一：生日問題與直覺判斷',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-03'
        },
        {
          text: 'CH4 遊戲二：吹牛大王和推論假設',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-04'
        },
        {
          text: 'CH5 遊戲三：數列挑戰與確認偏誤',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-05'
        },
        {
          text: 'CH6 遊戲四：各就各位和推論假設',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-06'
        },
        {
          text: 'CH7 清晰思考與問題分析',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-07'
        },
        {
          text: 'CH8 狀況評估-列出威脅與機會',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-08'
        },
        {
          text: 'CH9 狀況評估-清楚釐清顧慮',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-09'
        },
        {
          text: 'CH10 狀況評估-設定優先順序',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-10'
        },
        {
          text: 'CH11 狀況評估-是否需要分析問題',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-11'
        },
        {
          text: 'CH12 問題分析-描述問題',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-12'
        },
        {
          text: 'CH13 問題分析-將問題具體化',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-13'
        },
        {
          text: 'CH14 問題分析-測試可能的原因',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-14'
        },
        {
          text: 'CH15 問題分析-選定最可能的原因',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-15'
        },
        {
          text: 'CH16 問題推理過程的障礙與克服技巧',
          link: '/docFubon/thinking_And_Analysis/thinking_And_Analysis-16'
        },
      ]
    }
  ],
}
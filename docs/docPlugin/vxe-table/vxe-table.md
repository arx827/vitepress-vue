---
title: 工具 - Vxe-table
---

# 開發指南
## 全局安裝
  在 Vue 專案目錄下，安裝 `Vxe-table`
  ```sh
  npm i -S xe-utils vxe-table
  ```

  在 `main.ts` 中，加入 `Vxe-table`
  ::: details main.ts
  ```ts
  import { App, createApp } from 'vue'
  import VXETable from 'vxe-table'
  import 'vxe-table/lib/style.css'

  function useTable (app: App) {
    app.use(VXETable)
  }

  createApp(App).use(useTable).mount('#app')
  ```
  :::

## 按需載入
  如果您使用了 `vite`，借助插件 `vite-plugin-style-import` 可以實現按需載入模組，減少檔案體積。

  - 安裝 `vite-plugin-style-import`
    ```sh
    npm i -D vite-plugin-style-import
    ```

  - 修改文件 `vite.config.ts`
    ::: details vite.config.ts
    ```ts
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import { createStyleImportPlugin, VxeTableResolve } from 'vite-plugin-style-import'

    export default defineConfig({
      plugins: [
        // ...,
        createStyleImportPlugin({
          resolves: [
            VxeTableResolve()
          ],
        })
      ]
    })
    ```
    :::

  - 按需引入模組 `main.ts`
    ::: details main.ts
    ```ts
    import { App, createApp } from 'vue'
    import XEUtils from 'xe-utils'
    import {
      // 全域對象
      VXETable,

      // 表格功能
      // Filter,
      // Edit,
      // Menu,
      // Export,
      // Keyboard,
      // Validator,

      // 可選組件
      Icon,
      Column,
      // Colgroup,
      // Grid,
      // Tooltip,
      // Toolbar,
      // Pager,
      // Form,
      // FormItem,
      // FormGather,
      // Checkbox,
      // CheckboxGroup,
      // Radio,
      // RadioGroup,
      // RadioButton,
      // Switch,
      // Input,
      // Select,
      // Optgroup,
      // Option,
      // Textarea,
      // Button,
      // Modal,
      // List,
      // Pulldown,

      // 表格
      Table
    } from 'vxe-table'
    import zhCN from 'vxe-table/es/locale/lang/zh-CN'
    import 'vxe-table/styles/cssvar.scss'

    // 按需載入的方式預設是不帶國際化的，自訂國際化需要自行解析佔位符 '{0}'，例如：
    VXETable.setup({
      i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
    })

    function useTable (app: App) {
      // 表格功能
      // app.use(Filter)
      // .use(Edit)
      // .use(Menu)
      // .use(Export)
      // .use(Keyboard)
      // .use(Validator)

      // 可選組件
      app.use(Icon)
      .use(Column)
      // .use(Colgroup)
      // .use(Grid)
      // .use(Tooltip)
      // .use(Toolbar)
      // .use(Pager)
      // .use(Form)
      // .use(FormItem)
      // .use(FormGather)
      // .use(Checkbox)
      // .use(CheckboxGroup)
      // .use(Radio)
      // .use(RadioGroup)
      // .use(RadioButton)
      // .use(Switch)
      // .use(Input)
      // .use(Select)
      // .use(Optgroup)
      // .use(Option)
      // .use(Textarea)
      // .use(Button)
      // .use(Modal)
      // .use(List)
      // .use(Pulldown)

      // 安装表格
      .use(Table)
    }

    createApp(App).use(useTable).mount('#app')
    ```
    :::

## 快速入門
  ::: details 基本寫法 (ts)
  - vue
    ```xml
    <vxe-table border :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name">
        <template #default="{ row }">
          <span>自訂插槽模板 {{ row.name }}</span>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>

    <vxe-grid v-bind="gridOptions">
      <template #name="{ row }">
        <span>自訂插槽模板 {{ row.name }}</span>
      </template>
    </vxe-grid>
    ```

  - ts
    ```ts
    import { defineComponent } from 'vue'

    export default defineComponent({
      data () {
        return {
          tableData: [
            { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
            { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
            { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
            { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
          ],
          gridOptions: {
            border: true,
            columns: [
              { type: 'seq', width: 50 },
              { field: 'name', title: 'Name', slots: { default: 'name' } },
              { field: 'sex', title: 'Sex', showHeaderOverflow: true },
              { field: 'address', title: 'Address', showOverflow: true }
            ],
            data: [
              { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
              { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
              { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
              { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
            ]
          }
        }
      }
    })
    ```
  :::

  ::: details setup寫法 (ts)
  - vue
    ```xml
    <vxe-table border :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name">
        <template #default="{ row }">
          <span>自訂插槽模板 {{ row.name }}</span>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>

    <vxe-grid v-bind="gridOptions">
      <template #name="{ row }">
        <span>自訂插槽模板 {{ row.name }}</span>
      </template>
    </vxe-grid>
    ```

  - ts
    ```ts
    import { defineComponent, ref, reactive } from 'vue'
    import { VxeGridProps } from 'vxe-table'

    interface UserVO {
      id: number;
      name: string;
      role: string;
      sex: string;
      age: number;
      address: string;
    }

    export default defineComponent({
      setup () {
        const tableData = ref<UserVO[]>([
          { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
          { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
          { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
          { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
        ])

        const gridOptions = reactive<VxeGridProps<UserVO>>({
          border: true,
          columns: [
            { type: 'seq', width: 50 },
            { field: 'name', title: 'Name', slots: { default: 'name' } },
            { field: 'sex', title: 'Sex', showHeaderOverflow: true },
            { field: 'address', title: 'Address', showOverflow: true }
          ],
          data: [
            { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
            { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
            { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
            { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
          ]
        })

        return {
          tableData,
          gridOptions
        }
      }
    })
    ```
  :::

## 全域參數
  :::details main.ts
  ```ts
  import VXETable from 'vxe-table'

  VXETable.setup({
    // size: null, // 全域尺寸
    // zIndex: 999, // 全域 zIndex 起始值，如果專案的 z-index 樣式值過大時就需要跟隨設定較大，避免被遮蔽；新版本可以使用 dom-zindex 共用配置
    // version: 0, // 版本號，對於某些帶有資料快取的功能有用到，上升版本號可以用來重置數據
    // loadingText: '載入中...', // 全域loading提示內容，如果為null則不顯示文本
    // table: {
    //   showHeader: true,
    //   keepSource: false,
    //   showOverflow: null,
    //   showHeaderOverflow: null,
    //   showFooterOverflow: null,
    //   size: null,
    //   autoResize: false,
    //   stripe: false,
    //   border: false,
    //   round: false,
    //   emptyText: '暂无数据',
    //   resizeConfig: {
    //     refreshDelay: 250
    //   },
    //   rowConfig: {
    //     keyField: '_X_ROW_KEY' // 行数据的唯一主键字段名
    //   },
    //   radioConfig: {
    //     trigger: 'default'
    //   },
    //   checkboxConfig: {
    //     strict: false,
    //     highlight: false,
    //     range: false,
    //     trigger: 'default'
    //   },
    //   sortConfig: {
    //     remote: false,
    //     trigger: 'default',
    //     orders: ['asc', 'desc', null],
    //     sortMethod: null
    //   },
    //   filterConfig: {
    //     remote: false,
    //     filterMethod: null
    //   },
    //   expandConfig: {
    //     trigger: 'default',
    //     showIcon: true
    //   },
    //   treeConfig: {
    //     rowField: 'id',
    //     parentField: 'parentId',
    //     children: 'children',
    //     hasChild: 'hasChild',
    //     mapChildren: '_X_ROW_CHILD',
    //     indent: 20,
    //     showIcon: true
    //   },
    //   tooltipConfig: {
    //     enterable: true
    //   },
    //   menuConfig: {
    //     visibleMethod () {}
    //   },
    //   editConfig: {
    //     mode: 'cell',
    //     showAsterisk: true
    //   },
    //   importConfig: {
    //     modes: ['insert', 'covering']
    //   },
    //   exportConfig: {
    //     modes: ['current', 'selected']
    //   },
    //   customConfig: {
    //    storage: false
    //   },
    //   area-config: {
    //     multiple: false
    //   },
    //   scrollX: {
    //     enabled: false, // 是否默认开启横向虚拟滚动
    //     gt: 60 // 当列大于指定数量时自动触发启用虚拟滚动
    //   },
    //   scrollY: {
    //     enabled: false, // 是否默认开启纵向虚拟滚动
    //     gt: 100 // 当数据大于指定数量时自动触发启用虚拟滚动
    //   },
    //   loading: {
    //     icon: 'vxe-icon-spinner roll',
    //     text: '加载中...'
    //   }
    // },
    // grid: {
    //   size: null,
    //   zoomConfig: {
    //     escRestore: true
    //   },
    //   pagerConfig: {
    //     perfect: false
    //   },
    //   toolbarConfig: {
    //     perfect: false
    //   },
    //   proxyConfig: {
    //     autoLoad: true,
    //     message: true,
    //     props: {
    //       list: null, // 用于列表，读取响应数据
    //       result: 'result', // 用于分页，读取响应数据
    //       total: 'page.total' // 用于分页，读取总条数
    //     }
    //     beforeItem: null,
    //     beforeColumn: null,
    //     beforeQuery: null,
    //     afterQuery: null,
    //     beforeDelete: null,
    //     afterDelete: null,
    //     beforeSave: null,
    //     afterSave: null
    //   }
    // },
    // pager: {
    //   size: null,
    //   autoHidden: false,
    //   perfect: true,
    //   pageSize: 10,
    //   pagerCount: 7,
    //   pageSizes: [10, 15, 20, 50, 100],
    //   layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']
    // },
    // form: {
    //   preventSubmit: false
    //   size: null,
    //   colon: false,
    //   validConfig: {
    //     autoPos: true
    //   },
    //   tooltipConfig: {
    //     enterable: true
    //   },
    //   titleAsterisk: true
    // },
    // input: {
    //   size: null,
    //   transfer: false
    //   parseFormat: 'yyyy-MM-dd HH:mm:ss.SSS',
    //   labelFormat: '',
    //   valueFormat: '',
    //   startDay: 1,
    //   digits: 2,
    //   controls: true
    // },
    // textarea: {
    //   size: null
    //   autosize: {
    //     minRows: 1,
    //     maxRows: 10
    //   }
    // },
    // select: {
    //   size: null,
    //   transfer: false,
    //   optionConfig: {
    //     keyField: '_X_OPTION_KEY' // 选项数据的唯一主键字段名
    //   },
    //   multiCharOverflow: 8
    // },
    // toolbar: {
    //   size: null,
    //   import: {
    //     mode: 'covering'
    //   },
    //   export: {
    //     types: ['csv', 'html', 'xml', 'txt']
    //   },
    //   custom: {
    //     isFooter: true
    //   },
    //   buttons: [],
    //   tools: []
    // },
    // button: {
    //   size: null,
    //   transfer: false
    // },
    // radio: {
    //   size: null
    // },
    // checkbox: {
    //   size: null
    // },
    // switch: {
    //   size: null
    // },
    // modal: {
    //   // size: null,
    //   minWidth: 340,
    //   minHeight: 200,
    //   lockView: true,
    //   mask: true,
    //   duration: 3000,
    //   marginSize: 0,
    //   dblclickZoom: true,
    //   showTitleOverflow: true
    //   storage: false
    // },
    // list: {
    //   scrollY: {
    //     gt: 100
    //   }
    // }
  })
  ```
  :::

## 全域圖標
  如果項目已有適合的圖標，可透過配置替換並自行調整相關的樣式即可

  :::details main.ts
  ```ts
  import VXETable from 'vxe-table'

  VXETable.setup({
    icon: {
      // loading
      LOADING: 'vxe-icon-spinner roll vxe-loading--default-icon',

      // table
      TABLE_SORT_ASC: 'vxe-icon-caret-up',
      TABLE_SORT_DESC: 'vxe-icon-caret-down',
      TABLE_FILTER_NONE: 'vxe-icon-funnel',
      TABLE_FILTER_MATCH: 'vxe-icon-funnel',
      TABLE_EDIT: 'vxe-icon-edit',
      TABLE_HELP: 'vxe-icon-question-circle-fill',
      TABLE_TREE_LOADED: 'vxe-icon-spinner roll',
      TABLE_TREE_OPEN: 'vxe-icon-caret-right rotate90',
      TABLE_TREE_CLOSE: 'vxe-icon-caret-right',
      TABLE_EXPAND_LOADED: 'vxe-icon-spinner roll',
      TABLE_EXPAND_OPEN: 'vxe-icon-arrow-right rotate90',
      TABLE_EXPAND_CLOSE: 'vxe-icon-arrow-right',
      TABLE_CHECKBOX_CHECKED: 'vxe-icon-checkbox-checked',
      TABLE_CHECKBOX_UNCHECKED: 'vxe-icon-checkbox-unchecked',
      TABLE_CHECKBOX_INDETERMINATE: 'vxe-icon-checkbox-indeterminate',
      TABLE_RADIO_CHECKED: 'vxe-icon-radio-checked',
      TABLE_RADIO_UNCHECKED: 'vxe-icon-radio-unchecked',

      // button
      BUTTON_DROPDOWN: 'vxe-icon-arrow-down',
      BUTTON_LOADING: 'vxe-icon-spinner roll',

      // select
      SELECT_LOADED: 'vxe-icon-spinner roll',
      SELECT_OPEN: 'vxe-icon-caret-down rotate180',
      SELECT_CLOSE: 'vxe-icon-caret-down',

      // pager
      PAGER_JUMP_PREV: 'vxe-icon-arrow-double-left',
      PAGER_JUMP_NEXT: 'vxe-icon-arrow-double-right',
      PAGER_PREV_PAGE: 'vxe-icon-arrow-left',
      PAGER_NEXT_PAGE: 'vxe-icon-arrow-right',
      PAGER_JUMP_MORE: 'vxe-icon-ellipsis-h',

      // input
      INPUT_CLEAR: 'vxe-icon-error-circle-fill',
      INPUT_PWD: 'vxe-icon-eye-fill',
      INPUT_SHOW_PWD: 'vxe-icon-eye-fill-close',
      INPUT_PREV_NUM: 'vxe-icon-caret-up',
      INPUT_NEXT_NUM: 'vxe-icon-caret-down',
      INPUT_DATE: 'vxe-icon-calendar',
      INPUT_SEARCH: 'vxe-icon-search',

      // modal
      MODAL_ZOOM_IN: 'vxe-icon-square',
      MODAL_ZOOM_OUT: 'vxe-icon-maximize',
      MODAL_CLOSE: 'vxe-icon-close',
      MODAL_INFO: 'vxe-icon-info-circle-fill',
      MODAL_SUCCESS: 'vxe-icon-success-circle-fill',
      MODAL_WARNING: 'vxe-icon-warnion-circle-fill',
      MODAL_ERROR: 'vxe-icon-error-circle-fill',
      MODAL_QUESTION: 'vxe-icon-question-circle-fill',
      MODAL_LOADING: 'vxe-icon-spinner roll',

      // toolbar
      TOOLBAR_TOOLS_REFRESH: 'vxe-icon-repeat',
      TOOLBAR_TOOLS_REFRESH_LOADING: 'vxe-icon-repeat roll',
      TOOLBAR_TOOLS_IMPORT: 'vxe-icon-upload',
      TOOLBAR_TOOLS_EXPORT: 'vxe-icon-download',
      TOOLBAR_TOOLS_PRINT: 'vxe-icon-print',
      TOOLBAR_TOOLS_FULLSCREEN: 'vxe-icon-fullscreen',
      TOOLBAR_TOOLS_MINIMIZE: 'vxe-icon-minimize',
      TOOLBAR_TOOLS_CUSTOM: 'vxe-icon-custom-column',
      TOOLBAR_TOOLS_FIXED_LEFT: 'vxe-icon-fixed-left',
      TOOLBAR_TOOLS_FIXED_LEFT_ACTIVED: 'vxe-icon-fixed-left-fill',
      TOOLBAR_TOOLS_FIXED_RIGHT: 'vxe-icon-fixed-right',
      TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVED: 'vxe-icon-fixed-right-fill',

      // form
      FORM_PREFIX: 'vxe-icon-question-circle-fill',
      FORM_SUFFIX: 'vxe-icon-question-circle-fill',
      FORM_FOLDING: 'vxe-icon-arrow-up rotate180',
      FORM_UNFOLDING: 'vxe-icon-arrow-up'
    }
  })
  ```
  :::

## 全域主題
  - 第一種方式：修改css 變數（[查看所有變數](https://github.com/x-extends/vxe-table/blob/master/styles/cssvar.scss)），並引入所有樣式

    ::: details cssvar.scss
    ```scss
    @import 'vxe-table/lib/style.css';

    // 給 html 加 class，例如 black-theme，然後修改css變數
    html.black-theme {
      --vxe-font-color: #98989E;
      --vxe-primary-color: #2C7ECF;
      --vxe-icon-background-color: #98989E;
      --vxe-table-font-color: #98989E;
      --vxe-table-resizable-color: #95969a;
      --vxe-table-header-background-color: #28282A;
      --vxe-table-body-background-color: #151518;
      --vxe-table-background-color: #4a5663;
      --vxe-table-border-width: 1px;
      --vxe-table-border-color: #37373A;
      // ...
    }
    ```
    :::

  - 第二種方式：建立scss 檔案（[查看所有變數](https://github.com/x-extends/vxe-table/blob/master/styles/variable.scss)），並引入所有樣式
    ::: details variable.scss
    ```scss
    // 修改scss变量
    $vxe-font-size: 14px;
    $vxe-font-color: #666;
    $vxe-primary-color: #409eff;
    $vxe-table-font-color: $vxe-font-color;
    $vxe-table-border-color: #e8eaec;
    $vxe-table-border-radius: 4px;
    // ...

    @import 'vxe-table/styles/index.scss';
    ```
    :::

## 國際化
  如果希望使用指定語言，則需要進行多語言設定。以中/英文為例

  ```sh
  npm i vxe-table xe-utils vue-i18n
  ```

  ::: details src/i18n/index.ts
  ```ts
  import { createI18n } from 'vue-i18n'
  import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
  import enUS from 'vxe-table/lib/locale/lang/en-US'

  const messages = {
    zh_CN: {
      ...zhCN
    },
    en_US: {
      ...enUS
    }
  }

  const i18n = createI18n({
    locale: 'zh_CN',
    messages,
  })

  export default i18n
  ```
  :::

  ::: details main.ts
  ```ts
  import { createApp } = 'vue'
  import i18n from './i18n'
  import VXETable from 'vxe-table'
  
  VXETable.setup({
    // 对组件内置的提示语进行国际化翻译
    i18n: (key, args) => i18n.global.t(key, args)
  })

  Vue.use(VXETable)

  createApp(App).use(i18n).use(VXETable).$mount('#app')
  ```
  :::

### 整合國際化
  若希望在專案中支援全域自動翻譯，可以透過全域參數開啟（將對列頭、校驗提示..進行自動翻譯）

  ::: details 安裝
  ```ts
  VXETable.setup({
    // 可選，對參數中的列頭、校驗提示..等進行自動翻譯（只對支援國際化的有效）
    translate (key, args) {
      // 例如，只翻譯 "app." 開頭的鍵值
      if (key && key.indexOf('app.') > -1) {
        return i18n.global.t(key, args)
      }
      return key
    }
  })
  ```
  :::

  ::: details 範例
  ```xml
    <vxe-table
    border
    height="600"
    :data="tableData">
    <vxe-column field="name" title="app.body.label.name"></vxe-column>
    <vxe-column field="age" title="app.body.label.age"></vxe-column>
    <vxe-column field="sex" title="app.body.label.sex"></vxe-column>
  </vxe-table>
  ```
  :::

  - [國際化 lang](https://github.com/x-extends/vxe-table/tree/master/packages/locale/lang)
---
title: 工具 - Vxe-table
---

# 虛擬滾動
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

## 全域圖標

## 全域主題

## 國際化
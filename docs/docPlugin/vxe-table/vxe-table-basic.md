---
title: 工具 - Vxe-table
---

# 基礎表格
## 基礎
  `vxe-table` 基礎表格，以範本方式使用非常簡單、方便
  >（附註：每一列field 欄位屬性不可變更）

  ![vxe-table-basic-1](/docPlugin/vxe-table/vxe-table-basic-1.png)

  ::: details demo.vue
  ```vue
  <template>
    <div>
      <vxe-toolbar>
        <template #buttons>
          <vxe-button @click="allAlign = 'left'">居左</vxe-button>
          <vxe-button @click="allAlign = 'center'">居中</vxe-button>
          <vxe-button @click="allAlign = 'right'">居右</vxe-button>
        </template>
      </vxe-toolbar>

      <vxe-table
        :align="allAlign"
        :data="tableData">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="age" title="Age"></vxe-column>
      </vxe-table>
    </div>
  </template>

  <script lang="ts" setup>
  import { ref } from 'vue'
  import { VxeTablePropTypes } from 'vxe-table'

  interface RowVO {
    id: number
    name: string
    role: string
    sex: string
    age: number
    address: string
  }

  const allAlign = ref<VxeTablePropTypes.Align>(null)

  const tableData = ref<RowVO[]>([
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ])
  </script>
  ```
  :::

  使用 `row-config.isHover` 屬性啟用 `hover` 行高亮

  ![vxe-table-basic-2](/docPlugin/vxe-table/vxe-table-basic-2.png)

  ::: details demo.vue
  ```vue
  <template>
    <div>
      <vxe-table
        border
        show-header-overflow
        show-overflow
        :row-config="{isHover: true}"
        :data="tableData">
        <vxe-column type="seq" title="序號" width="60"></vxe-column>
        <vxe-column field="name" title="姓名"></vxe-column>
        <vxe-column field="sex" title="性別"></vxe-column>
        <vxe-column field="age" title="年齡"></vxe-column>
        <vxe-column field="address" title="地址"></vxe-column>
      </vxe-table>
    </div>
  </template>

  <script lang="ts" setup>
  import { ref } from 'vue'

  interface RowVO {
    id: number
    name: string
    role: string
    sex: string
    age: number
    address: string
  }

  const tableData = ref<RowVO[]>([
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ])
  </script>
  ```
  :::

## 尺寸
  可以設定大小尺寸：`medium` / `small` / `mini`
  
  可以透過 `scss` 變數修改相關樣式，[查看所有變數](https://github.com/x-extends/vxe-table/blob/master/styles/variable.scss)

## 序號
## 列寬
## 自動換行
## 單元格工具提示
## 斑馬線條紋
## 邊框
## 圓角邊框
## 單元格樣式
## 單元格動態樣式
## 捲軸樣式
## 隱藏頭部
## 列寬拖曳
## 最小高度
## 行高
## 響應式寬高
## 固定表頭
## 固定列
## 固定表頭和列
## 表頭分組
## 高亮列
## 孝之
## 單選框
## 複選框
## 排序
## 篩選
## 空數據
## 載入中
## 格式化內容
## HTML 標籤

## 資料格式與字段
  支援多種資料格式：預設標準結構、深層結構、二維數組
  ![vxe-table-basic-98](/docPlugin/vxe-table/vxe-table-basic-98.png)


## 完整功能
  ![vxe-table-basic-100](/docPlugin/vxe-table/vxe-table-basic-100.png)

  ::: details demo.vue
  ```vue
  <template>
    <div>
      <vxe-table
        border
        stripe
        height="400"
        :loading="loading"
        :column-config="{resizable: true}"
        :row-config="{isHover: true}"
        :checkbox-config="{labelField: 'id', highlight: true, range: true}"
        :data="tableData">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column type="checkbox" title="ID" width="140"></vxe-column>
        <vxe-column field="name" title="Name" sortable></vxe-column>
        <vxe-column field="sex" title="Sex" :filters="sexOptions" :filter-multiple="false" :formatter="formatterSex"></vxe-column>
        <vxe-column field="age" title="Age" :filters="ageOptions" :filter-method="filterAgeMethod" sortable></vxe-column>
        <vxe-column field="address" title="Address" show-overflow></vxe-column>
      </vxe-table>
    </div>
  </template>

  <script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import { VxeColumnPropTypes } from 'vxe-table'

  interface RowVO {
    id: number
    name: string
    role: string
    sex: string
    age: number
    address: string
  }

  const loading = ref(false)
  const tableData = ref<RowVO[]>([])
  const sexOptions = ref([
    {
      label: '女',
      value: '0'
    },
    {
      label: '男',
      value: '1'
    }
  ])

  const ageOptions = ref([
    { label: '大於16歲', value: 16 },
    { label: '大於26歲', value: 26 },
    { label: '大於30歲', value: 30 }
  ])

  const formatterSex: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
    const item = sexOptions.value.find(item => item.value === cellValue)
    return item ? item.label : ''
  }

  const filterAgeMethod: VxeColumnPropTypes.FilterMethod<RowVO> = ({ value, row }) => {
    return row.age >= value
  }

  onMounted(() => {
    loading.value = true
    setTimeout(() => {
      tableData.value = [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: '0', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: '0', age: 35, address: 'test abc' },
        { id: 10009, name: 'Test9', role: 'Test', sex: '1', age: 21, address: 'test abc' },
        { id: 10010, name: 'Test10', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
        { id: 10011, name: 'Test11', role: 'Test', sex: '0', age: 29, address: 'test abc' },
        { id: 10012, name: 'Test12', role: 'Develop', sex: '1', age: 27, address: 'test abc' },
        { id: 10013, name: 'Test13', role: 'Test', sex: '0', age: 24, address: 'test abc' },
        { id: 10014, name: 'Test14', role: 'Develop', sex: '1', age: 34, address: 'test abc' },
        { id: 10015, name: 'Test15', role: 'Test', sex: '1', age: 21, address: 'test abc' },
        { id: 10016, name: 'Test16', role: 'Develop', sex: '0', age: 20, address: 'test abc' },
        { id: 10017, name: 'Test17', role: 'Test', sex: '1', age: 31, address: 'test abc' },
        { id: 10018, name: 'Test18', role: 'Develop', sex: '0', age: 32, address: 'test abc' },
        { id: 10019, name: 'Test19', role: 'Test', sex: '1', age: 37, address: 'test abc' },
        { id: 10020, name: 'Test20', role: 'Develop', sex: '1', age: 41, address: 'test abc' }
      ]
      loading.value = false
    }, 500)
  })
  </script>
  ```
  :::
---
title: 'ECharts'
---

# Apache ECharts 可視化圖表 ( 在 Vue3 setup 中使用)
  - [官網](https://echarts.apache.org/zh/index.html)
  - [GitHub](https://github.com/apache/echarts)

## 目錄結構說明
  使用封裝過後的 EChart 檔案 usePie.js 及使用圖表的頁面
  ```sh
  └── src
  ├── App.vue                首頁，圖表所在位置
  ├── plugins
  │    └── usePie.js         封裝後的Echarts
  ```

## 安裝
  在 Vue 專案目錄下，安裝 `ECharts`
  ```sh
  npm i -S echarts 
  ```

  > 注意：若有使用 typescript，須在 tsconfig.json 中新增屏蔽
  > 因 echarts 內，使用 ES3 標註，會報錯
  > ```json
  > {
  >   ...
  >   "compilerOptions": {
  >     ...
  >     "ignoreDeprecations": "5.0",
  >   }
  >   ...
  > }
  > ```

## 引入 ECharts
  在 `usePie.js` 中，引入需要的圖表類型，可參考[範例網頁](https://echarts.apache.org/examples/zh/index.html)，找尋需要的圖表類型。

  `按需引入` 所需的模組至 `usePie.js`
  
  ```js
  // 引入 echarts 核心模塊，核心模塊提供了 echarts 使用必須的接口
  import * as echarts from 'echarts/core'
  // 引入 標題、提示框、圖例組件，組件後綴都為「 Component 」
  import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
  // 引入 圓餅圖圖表，圖表後綴都為 Chart
  import { PieChart } from 'echarts/charts'
  // 標籤自動佈局、全局過度動畫 等特性
  import { LabelLayout, UniversalTransition } from 'echarts/features';
  // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或 SVGRenderer 是必須的一步
  import { CanvasRenderer } from 'echarts/renderers'

  echarts.use([TitleComponent, TooltipComponent, LegendComponent, PieChart, LabelLayout, UniversalTransition, CanvasRenderer])
  ```

## 依需求封裝參數
  將 `HTML Element` 當成參數傳入，接著封裝 `setOption 函式`，此函式會繪製圖表，先將不需要改的參數寫好，這樣一來，Vue 元件在引用時，就只需要傳入數據資料即可繪製。

  若有 `RWD` 需求，還需要封裝 `resize 函式`，並在視窗發生變動時呼叫。

  ```js
  const usePie = (element) => {
    // 初始化，傳入HTML element
    const pieChart = echarts.init(element)

    // 封裝相關參數依需求訂製
    const setOption = data => {
      const option = {
        title: {
          text: '哆啦A夢人氣角色',
          subtext: '人氣角色統計',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: '喜歡比例',
            type: 'pie',
            radius: '50%',
            data: data,
          },
        ],
      }
      return pieChart.setOption(option)
    }

    // 封裝resize，RWD會使用到
    const resize = () => pieChart.resize()

    return { setOption, resize }
  }

  export default usePie
  ```

## 在 Vue 中呼叫
  接著只要在 Vue 中引入寫好的 `usePie.js`，在 `Mounted` 時傳入 `HTML Element` 呼叫封裝好的 `setOption 函式`，只要資料更新時傳入新資料並呼叫即可。

  ```vue
  <script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import usePie from '@/plugins/usePie'
    const container = ref(null)

    onMounted(() => {
      const { setOption, resize } = usePie(container.value)
      setOption([
        { value: 2200, name: '哆啦A夢', itemStyle: { color: '#46B3E6' } },
        { value: 2200, name: '小夫', itemStyle: { color: '#2E279D' } },
        { value: 4400, name: '胖虎', itemStyle: { color: '#4D80E4' } },
      ])
      window.addEventListener('resize', () => {
        resize()
      })
    })
  </script>

  <template>
    <div class="page__container flex-fill">
      <div ref="container" class="container"></div>
    </div>
  </template>

  <style scoped>
  .container {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
  }
  </style>
  ```

## 效果
  ![echarts-1](/public/docPlugin/echarts/echarts-1.png)

## 相關連結
  - [ECharts 官網](https://echarts.apache.org/zh/index.html)
  - [ECharts 圖表範例](https://echarts.apache.org/examples/zh/index.html)
  - [ECharts API](https://echarts.apache.org/zh/option.html)

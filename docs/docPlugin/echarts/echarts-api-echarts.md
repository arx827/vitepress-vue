---
title: 'ECharts-API'
---

# API
  - [官網-API](https://echarts.apache.org/zh/api.html#echarts)

## 全局 echarts 對象
  全局 `echarts` 對象，透過 `import` 獲得。
  ```js
  import * as echarts from 'echarts/core';
  ```
## init
  <small>`Function`</small>

  創建一個 `ECharts 實例`，返回 [`echartsInstance`](echarts-api-echartsinstance)，<br>
  不能在單個容器上初始化多個 `ECharts 實例`。

  ::: details 相關參數
  ```ts
  (dom?: HTMLDivElement|HTMLCanvasElement, theme?: Object|string, opts?: {
    devicePixelRatio?: number,
    renderer?: string,
    useDirtyRect?: boolean,     // 從 `5.0.0` 開始支持
    useCoarsePointer?: boolean, // 從 `5.4.0` 開始支持
    pointerSize?: number,       // 從 `5.4.0` 開始支持
    ssr?: boolean,              // 從 `5.3.0` 開始支持
    width?: number|string,
    height?: number|string,
    locale?: string             // 從 `5.0.0` 開始支持
  }) => ECharts
  ```
  :::

  - #### 參數解釋
    - ##### `dom`
      實例容器，一般是一個具有高寬的 `DIV` 元素。在 `Vue` 中，可使用 `ref 元素節點`。只有在設置 `opts.ssr` 開啟了服務端渲染後，該參數才是可選。
    - ##### `theme`
      應用的主題，可以是一個主題的配置對象，也可以使用已經通過 [`echarts.registerTheme`]() 註冊的主題名稱。
    - ##### `opts`
      附加參數。有下面幾個可選項：
      - ###### `devicePixelRatio`
        設備像素比，默認取瀏覽器的值 `window.devicePixelRatio`。
      - ###### `renderer`
        渲染模式，支持 `canvas` 或者 `svg`。
      - ###### `ssr`
        是否使用服務端渲染，只有在 `SVG 渲染模式` 有效。開啟後不再會每幀自動渲染，必須要調用 `renderToSVGString `方法才能得到渲染後 `SVG 字符串`。
      - ###### `useDirtyRect`
        是否開啟矩形渲染，只有在 `Canvas 渲染模式` 有效，默認為 `false`。
      - ###### `useCoarsePointer`
        是否擴大可點擊元素的響應範圍。 `null` 表示對移動設備開啟；`true` 表示總是開啟；`false` 表示總是不開啟。
      - ###### `pointerSize`
        擴大元素響應範圍的像素大小，配合 `opts.useCoarsePointer` 使用。
      - ###### `width`
        可顯式指定實例寬度，單位為 `像素`。如果傳入值為 `null` / `undefined` / `'auto'`，則表示 `自動取 dom（實例容器）的寬度`。
      - ###### `height`
        可顯式指定實例高度，單位為 `像素`。如果傳入值為 `null` / `undefined` / `'auto'`，則表示 `自動取dom（實例容器）的高度`。
      - ###### `locale`
        使用的語言，內置 `'ZH'` 和 `'EN'` 兩個語言，也可以使用 `echarts.registerLocale` 方法註冊新的語言包。

      - 如果不指定主題，也需在傳入 `opts` 前，先傳入 `null`，如：
        ```js
        const chart = echarts.init(dom, null, {renderer: 'svg'});
        ```

  > 如果容器是隱藏的，`ECharts` 可能會獲取不到 `DIV` 的高寬導致初始化失敗，這時候可以明確指定 `DIV` 的 `style.width` 和 `style.height`，或者在 `div` 顯示後手動調用 `resize` 調整尺寸。在使用 `服務端渲染 (ssr)` 的模式下，必須通過 `opts.width` 和 `opts.height` 設置高和寬。

## connect
  <small>`Function`</small>

  多個圖表實例實現聯動。

  ::: details 相關參數
  ```ts
  (group:string|Array)
  ```
  :::

  - #### 參數解釋
    - ##### `group`
      `group` 的 `id`，或者圖表實例的 `數組`。
  
  - #### 範例
    ```js
    // 分別設置每個實例的 group id
    chart1.group = 'group1';
    chart2.group = 'group1';
    echarts.connect('group1');
    // 或者可以直接傳入需要聯動的實例數組
    echarts.connect([chart1, chart2]);
    ```

## disconnect
  <small>`Function`</small>

  解除圖表實例的聯動，如果只需要移除單個實例，可以通過將該圖表實例 `group` 設為空。

  ::: details 相關參數
  ```ts
  (group:string)
  ```
  :::

  - #### 參數解釋
    - ##### `group`
      `group` 的 `id`。

## dispose
  <small>`Function`</small>

  銷毀實例，實例銷毀後無法再被使用。

  ::: details 相關參數
  ```ts
  (target: ECharts|HTMLDivElement|HTMLCanvasElement)
  ```
  :::

## getInstancceByDom
  <small>`Function`</small>

  獲取 dom 容器上的實例。

  ::: details 相關參數
  ```ts
  (target: HTMLDivElement|HTMLCanvasElement) => ECharts
  ```
  :::

## use
  <small>`Function`</small>

  > 從 `5.0.1` 開始支持

  使用組件，配合新的按需引入的接口使用。
  > 注意：該方法必須在 [`echarts.init`](#init) 之前使用。

  #### 範例
  ```js {17-19}
  // 引入 echarts 核心模塊，核心模塊提供了 echarts 使用必須要的接口。
  import * as echarts from 'echarts/core';
  // 引入柱狀圖圖表，圖表後綴都為 Chart
  import {
    BarChart
  } from 'echarts/charts';
  // 引入直角坐標系組件，組件後綴都為 Component
  import {
    GridComponent
  } from 'echarts/components';
  // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必須的一步
  import {
    CanvasRenderer
  } from 'echarts/renderers';

  // 註冊必須的組件
  echarts.use(
    [GridComponent, BarChart, CanvasRenderer]
  );
  ```

## registerMap
  <small>`Function`</small>

  註冊可用的地圖，只在 `geo` 組件 或者 `map` 圖表類型中使用。

  ::: details 相關參數
  ```ts
  (
    mapName: string,
    opt: {
        geoJSON: Object | string;
        specialAreas?: Object;
    }
  )
  | (
      mapName: string,
      opt: {
          svg: Object | string;
      }
  )
  | (
      mapName: string,
      geoJSON: Object | string,
      specialAreas?: Object
  )
  ```
  :::

  - #### 參數解釋
    - ##### `mapName`
      地圖名稱，在 `geo` 組件或者 `map` 圖表類型中設置的 map 對應的就是該值。
    - ##### `opt`
      - ###### `geoJSON`
        可選。`GeoJson` 格式的數據，具體格式見https://geojson.org/。可以是 `JSON` 字符串，也可以是解析得到的 `對象`。這個參數也可以寫為 `geoJson`，效果相同。
      - ###### `svg`
        可選。從 `v5.1.0` 開始支持 `SVG` 格式的數據。可以是字符串，也可以是解析得到的 `SVG DOM 對象`。
      - ###### `specialAreas`
        可選。將地圖中的部分區域縮放到合適的位置，可以使得整個地圖的顯示更加好看。只在 `geoJSON` 中生效，`svg` 中不生效。

  - #### 範例
    ```js
    echarts.registerMap('USA', usaJson, {
      // 把阿拉斯加移到美國主大陸左下方
      Alaska: {
        // 左上角經度
        left: -131,
        // 左上角緯度
        top: 25,
        // 經度橫跨的範圍
        width: 15
      },
      // 夏威夷
      Hawaii: {
        left: -110,
        top: 28,
        width: 5
      },
      // 波多黎各
      'Puerto Rico': {
        left: -76,
        top: 26,
        width: 2
      }
    });
    ```
  
  > 如果你在項目中使用了按需引入，從 `v5.3.0` 開始`registerMap` 必須要在引入地圖組件後才能使用。

## getMap
  <small>`Function`</small>

  獲取已註冊的地圖，返回的對像類型如下

  ```js
  {
    // 地圖的 geoJSON 數據
    geoJSON: Object,
    // 地圖的特殊區域，見 registerMap
    specialAreas: Object
  }
  ```

  - `geoJSON` 也可寫為 `geoJson`，二者引用的是相同的內容。
  - 對於 `registerMap` 所註冊的 `SVG` ，暫並不支持從此方法中返回。
  - 如果你在項目中使用了按需引入，從 `v5.3.0` 開始`getMap` 必須要在引入地圖組件後才能使用。

  ::: details 相關參數
  ```ts
  (mapName: string) => Object
  ```
  :::

## registerTheme
  <small>`Function`</small>

  註冊主題，用於 [初始化實例](#init) 的時候指定。

  ::: details 相關參數
  ```ts
  (themeName: string, theme: Object)
  ```
  :::

## registerLocale
  <small>`Function`</small>

  > 從 `5.0.0` 開始支持

  註冊語言包，用於 [初始化實例](#init) 的時候指定。

  ::: details 相關參數
  ```ts
  (locale: string, localeCfg: Object)
  ```
  :::

## setPlatformAPI
  <small>`Function`</small>

  > 從 `5.3.0` 開始支持

  設置平台相關的API，在 `NodeJS` 等非瀏覽器平台的時候可能需要提供。

  ::: details 相關參數
  ```ts
  (platformAPI?: {
    createCanvas(): HTMLCanvasElement
    measureText(text: string, font?: string): { width: number }
    loadImage(
        src: string,
        onload: () => void,
        onerror: () => void
    ): HTMLImageElement
  }) => void
  ```
  :::

  - #### 參數解釋
    - ##### `createCanvas`
      創建 Canvas 元素，主要用於測量文本寬度，在沒提供 measureText 的時候需要提供。
    - ##### `measureText`
      測量文本寬度，默認會通過 createCanvas得到 Canvas 元素提供的接口來測量文本寬度，也可以替換成更輕量的實現。
    - ##### `loadImage`
      加載圖片，在使用Canvas 渲染模式的時候並且使用URL 作為圖片的時候需要提供。

## graphic
  <small>`any`</small>

  圖形相關幫助方法。

  - ### extendShape
    <small>`Function`</small>

    創建一個新的 shape class。

    ::: details 相關參數
    ```ts
    (opts: Object) => zrender.graphic.Path
    ```
    :::

  - ### registerShape
    <small>`Function`</small>

    註冊一個開發者定義的 shape class。

    ::: details 相關參數
    ```ts
    (
      name: string,
      ShapeClass: zrender.graphic.Path
    )
    ```
    :::

    - #### 參數解釋
      - ##### `ShapeClass`
        須用 `echarts.graphic.extendShape` 生成。註冊後，這個 class 可以用 `echarts.graphic.getShapeClass` 方法得到。`registerShape` 會覆蓋已註冊的 class，如果用相同的 name 的話。註冊的class，可以被用於 `自定義系列（custom series）`和 `圖形組件（graphic component）`，聲明 `{type: name}` 即可。

    - #### 例如：
      ```js
      var MyShape = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        buildPath: function (ctx, shape) {
          ctx.moveTo(shape.x, shape.y);
          ctx.lineTo(shape.x + shape.width, shape.y);
          ctx.lineTo(shape.x, shape.y + shape.height);
          ctx.lineTo(shape.x + shape.width, shape.y + shape.height);
          ctx.closePath();
        }
      });
      echarts.graphic.registerShape('myCustomShape', MyShape);

      var option = {
        series: {
          type: 'custom',
          coordinateSystem: 'none',
          renderItem: function (params, api) {
            return {
              type: 'myCustomShape',
              shape: {
                x: api.value(0),
                y: api.value(1),
                width: api.value(2),
                height: api.value(3)
              },
              style: {
                fill: 'red'
              }
            };
          },
          data: [[10, 20, 30, 40]]
        }
      };
      ```

  - ### getShapeClass
    <small>`Function`</small>

    得到一個 [註冊](#registershape) 好的class。

    ::: details 相關參數
    ```ts
    ( name: String ) => zrender.graphic.Path
    ```
    :::

    這些內置 shape class 會被默認預先註冊進去: `circle`、`sector`、`ring`、`polygon`、`polyline`、`rect`、`line`、`bezierCurve`、`arc`.

  - ### clipPointsByRect
    <small>`Function`</small>

    輸入一組點，和一個矩形，返回被矩形截取過的點。

    ::: details 相關參數
    ```ts
    (
      // 要被截取的點列表，如 [[23, 44], [12, 15], ...]。
      points: Array.<Array.<number>>,
      // 用於截取點的矩形。
      rect: {
        x: number,
        y: number,
        width: number,
        height: number
      }
    ) => Array.<Array.<number>> // 截取結果。
    ```
    :::

  - ### clipRectByRect
    <small>`Function`</small>

    輸入兩個矩形，返回第二個矩形截取第一個矩形的結果。

    ::: details 相關參數
    ```ts
    (
      // 要被截取的矩形。
      targetRect: {
        x: number,
        y: number,
        width: number,
        height: number
      },
      // 用於截取點的矩形。
      rect: {
        x: number,
        y: number,
        width: number,
        height: number
      }
    ) => { // 截取結果。
      x: number,
      y: number,
      width: number,
      height: number
    }
    ```
    :::

    > 注意：如果矩形完全被截乾淨，會返回 `undefined`。
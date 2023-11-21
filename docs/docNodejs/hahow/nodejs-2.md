---
title: '第二章 Node.js 基礎'
---

# 第二章 Node.js 基礎

## 單元 1 - 網站基礎架構
  入門須知的簡易系統架構概念
  - 三層式網站架構
    `Three-Tier Architecture`
  - 主從式網站架構
    `Client-Server Architecture`

  - ### 三層式網站架構
    ![nodejs-2-1](/docNodejs/nodejs-2-1.png)

  - ### 主從式網站架構
    ![nodejs-2-2](/docNodejs/nodejs-2-2.png)

## 單元 2 - JavaScript、Node.js 簡介
  ![nodejs-2-3](/docNodejs/nodejs-2-3.png)
  - ### JavaScript 簡介
    市場上相當受歡迎的程式語言
    - 網站前端開發
    - 網站後端開發

  - ### Node.js 簡介
    ![nodejs-2-4](/docNodejs/nodejs-2-4.png)

    ![nodejs-2-5](/docNodejs/nodejs-2-5.png)

  - ### Node.js 執行引擎
    JavaScript 網站後端開發的基礎框架
    - 精簡的核心
    - 彈性的擴充功能
    - 活躍的社群

## 單元 3 - Node.js 快速開始
  ![nodejs-2-6](/docNodejs/nodejs-2-6.png)

  - ### Node.js 安裝
    [官方網站](https://nodejs.org/)
    - 到官方網站下載 `LTS` 版本
    - 安裝到電腦中
    - 重新啟動電腦 (建議)

  - ### Node.js 執行程式
    我的第一支用 `Node.js` 執行的程式
    - 使用 `VS Code` 開發工具
    - 建立、打開專案資料夾
    - 在專案資料夾中建立 `JavaScript` 程式檔案，撰寫程式

    - 使用終端機命令介面工具
    - 在終端機中輸入 `node 檔案名稱` 執行程式

  - ### 實作：執行我的第一支程式
    - 新增檔案『 `index.js` 』
    - 寫入
      ```js
      console.log("Hello Node.js")
      let x = 3;
      console.log(x);
      ```
    - 存擋
    - 打開終端機
    - 輸入
      ```sh
      node index.js
      ```

## 單元 4 - 模組系統
  ![nodejs-2-7](/docNodejs/nodejs-2-7.png)

  - ### 程式模組
    把程式切割成多個檔案協同運作
    - #### 主程式
    - #### 模組程式

  - ### 主程式
    終端機命令中，執行的程式檔案
    - #### 終端機
      ```sh
      node index.js
      ```

  - ### 模組程式
    主程式中額外載入的程式檔案
    - #### 終端機
      ```sh
      node index.js
      ```

      - ##### index.js (主程式)
        ```js
        const x = require("./data.js");
        console.log(x);
        ```

      - ##### data.js (模組程式)
        ```js
        module.exports = "Hello";
        ```

  - ### 輸出與載入
    - #### 輸出資料
      模組程式輸出資料到主程式
      - ##### 使用語法
        ```js
        module.exports = 資料;
        ```

    - #### 載入資料
      主程式從模組程式載入資料
      - ##### 使用語法
        ```js
        require(模組檔案的路徑);
        ```

    - #### 例如：
      - data.js
        ```js
        module.exports = 20;
        ```

      - index.js
        ```js
        const x = require("./data.js");
        console.log(x);   // 20
        ```

    - #### 實作：建立、載入模組基礎練習
      - lib.js
        ```js
        console.log("Test Lib");
        module.exports = 20;
        ```

      - index.js
        ```js
        let x = require("./lib.js");
        console.log("Hello Node.js");
        console.log("x");
        ```

      - node 執行
        ```sh
        node index.js
        ```

## 單元 5 - 檔案系統
  ![nodejs-2-8](/docNodejs/nodejs-2-8.png)

  - ### Node.js 內建模組
    不用額外撰寫，可直接載入使用
    - 檔案系統模組 `fs`
    - 加密系統模組 `crypto`
    - 程式管理模組 `process` ... 等

  - ### 檔案系統模組
    - #### 載入內建模組
      直接使用模組名稱載入
      - 使用語法
        ```js
        require("模組名稱");
        ```
    
    - #### 載入檔案系統模組
      檔案系統模組 名稱為 `fs`。
      - 使用語法
        ```js
        require("fs");
        ```

  - ### 操作檔案的基本方法
    - #### 寫入 / 建立檔案
      將文字資料 存放到檔案中。 (如果檔案不存在，則建立檔案；若已經存在，則寫入檔案！)
      - 載入檔案系統模組。
      - 呼叫 `writeFile` 方法。
      - 範例如下：
        ```js
        const fs = require("fs");
        fs.writeFile("檔案路徑", "資料", function(err) {
          if(err) {
            // 寫入失敗
          }else {
            // 寫入成功
          }
        })
        ```

    - #### 讀取檔案
      將文字資料從檔案中讀取出來
      - 載入檔案系統模組
      - 呼叫 `readFile` 方法
      - 範例如下：
        ```js
        const fs = require("fs");
        fs.readFile("檔案路徑", {encoding: "編碼"}, function(err, data) {
          // 編碼：如：utf-8
          if(err) {
            // 讀取失敗
          }else{
            // 讀取成功，透過 參數 data 取得檔案內容
          }
        })
        ```

  - ### 實作：檔案操作的基礎練習
    - index.js 主程式
      ```js
      const fs = require("fs");

      /**
       * 寫入檔案
       */
      // 若沒有此檔案，會建立新的檔案
      fs.writeFile("./test", "Hello Writing File", function(err){
        if(err) {
          console.log("寫入失敗");
        }else{
          console.log("寫入成功");
        }
      });

      /**
       * 讀取檔案
       */
      fs.readFile("./test", {encoding: "utf-8"}, function(err, data){
        if(err) {
          console.log("讀取失敗");
        }else{
          console.log("讀取成功，資料是：", data);
        }
      })
      ```

## 單元 6 - NPM 專案管理工具
  ![nodejs-2-9](/docNodejs/nodejs-2-9.png)

  - ### Node.js 專案管理
    - #### 專案的組成
      常見的程式專案基本要素
      - 專案基本資訊 (標題、簡介、版本號、開發人員 等等)
      - 專案本身的程式碼
      - 專案依賴的第三方模組

## 單元 7 - NPM 第三方模組管理


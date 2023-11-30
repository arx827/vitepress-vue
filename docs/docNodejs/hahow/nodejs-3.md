---
title: '第三章 Express 網站開發'
---

# 第三章 Express 網站開發
## 單元 1 - Express 簡介
![nodejs-3-1](/docNodejs/nodejs-3-1.png)

  ### Express 是什麼？
  - #### Node.js 網站後端解決方案
    了解網站後端開發的多樣性
    - 不使用第三方模組，獨立開發
    - 使用第三方模組
      - `Express`
      - `Koa`
      - `Meteor`

  - #### Express 的特性
    基於 Node.js 的第三方模組<br>
    用來開發網站後端
    - 精簡的核心
    - 彈性的擴充功能
    - 執行速度快
    - 最受歡迎，活躍的社群

## 單元 2 - Express 快速開始
![nodejs-3-1](/docNodejs/nodejs-3-1.png)
  ### Express 快速開始，執行步驟
  - #### 安裝 Express
    使用 `NPM` 安裝 `Express`
    - 終端機輸入以下命令：
      ```sh
      npm install express
      ```
  
  - #### 撰寫後端程式
    撰寫第一隻網站後端程式
    - 專案資料夾中建立 `index.js` 程式檔案，並開始撰寫程式
      ```js
      // index.js

      // 載入 express 第三方模組
      const express = require("express");

      // 建立 Application 物件
      const app = express();

      // 啟動伺服器在測試網址 http://localhost:3000/
      app.listen(3000, function(){
        console.log("Server Started");
      })
      ```

  - #### 執行、測試程式
    執行程式，測試是否正常運作
    - 終端機輸入以下命令
      ```sh
      node index.js
      ```
    - 執行成功後<br>
      測試伺服器的運作

  - #### 實作：我的第一隻網站後端程式
    - 初始化專案
      ```sh
      npm init -y
      ```
    - 安裝 `Express`
      ```sh
      npm install express
      ```
    - 新增 `index.js`
      ```js
      const express = require("express");
      const app = express();
      app.listen(3000, function(){
        console.log("Server Started");
      })
      ```

## 單元 3 - 網址的組成與運作方式
![nodejs-3-2](/docNodejs/nodejs-3-2.png)
  ### 什麼是網址 (URL)
  - #### 網址 Web Address (URL)
    可以連線到特定網路服務的地址
    - 不同的網址，代表網路上不同的服務或資源
    - 網站服務就是由各式各樣的網址組成的綜合呈現

  - #### 網址的組成
    通訊協定://主機名稱:埠號/路徑?要求字串
    - 通訊協定 (Protocol)
    - 主機名稱 (Hostname)
    - 埠號 (Port)
    - 路徑 (Path)
    - 要求字串 (Query String)

  ### 網址的組成範例
  - #### Google 首頁
    `https://google.com/`
    - 通訊協定：`https`
    - 主機名稱：`google.com`
    - 埠號：`https 預設 443`
    - 路徑：`/`
    - 要求字串：無

  - #### Google 搜尋結果
    `https://www.google.com/search?q=test`
    - 通訊協定：`https`
    - 主機名稱：`www.google.com`
    - 埠號：`https 預設 443`
    - 路徑：`/search`
    - 要求字串：`q=test`

  - #### Node.js 課程網頁
    `https://training.pada-x.com/node-js.htm`
    - 通訊協定：`https`
    - 主機名稱：`training.pada-x.com`
    - 埠號：`https 預設 443`
    - 路徑：`/node-js.htm`
    - 要求字串：無

  - #### 開發中，本機測試網址
    `http://localhost:3000`
    - 通訊協定：`http`
    - 主機名稱：`localhost`
    - 埠號：`自訂 3000`
    - 路徑：`/`
    - 要求字串：無

  ### 網址的運作
  ![nodejs-3-3](/docNodejs/nodejs-3-3.png)

  ### 網址和後端技術
  - #### 後端程式與網路環境設置，決定網站的網址
  

## 單元 4 - 路由基礎 Route

## 單元 5 - 請求物件 Request

## 單元 6 - 要求字串 Query String

## 單元 7 - 回應物件 Response

## 單元 8 - 靜態檔案處理 Static Files

## 單元 9 - 樣板引擎基礎 Template Engine

## 單元 10 - 使用者狀態管理

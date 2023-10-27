---
title: TypeSctipt 邁向專家之路
---

# 第一篇 TypeScript 入門準備
---
# 01 你的第一個 TypeScript 應用程式

## 1-1 本書行前準備
### 1-1-1 安裝 Node.js
  - [Nodejs 官網](https://nodejs.org/en)
  - 安裝完後，檢查 `Node.js` 和 `Npm` 工具是否有正確安裝：
    ```sh
    node --version
    # v14.17.3

    npm --version
    # 7.20.1
    ```

### 1-1-2 安裝 Git
  - [Git官網](https://git-scm.com/)
  - 安裝完後，檢查 `Git` 工具是否有正常安裝：
    ```sh
    git --version
    ```

### 1-1-3 安裝 TypeScript
  - 安裝
    ```sh
    npm i -g typescript@latest
    ```
  - 檢查 `TypeScript` 編譯器是否正確安裝：
    ```sh
    tsc --version
    # Version 4.3.5
    ```

### 1-1-4 安裝 VS Code 程式編輯器
  - [VScode 官網](https://code.visualstudio.com/)
  - 安裝完後，點選最左側的 `延伸模組 (Extensions) 圖示` ，輸入『 `typescript` 』，然後安裝『 `JavaScript and TypeScript Nightly` 』

## 1-2 創建並執行第一個 TypeScript 專案
### 1-2-1 初始化專案
  在想要建置專案的環境，新增一個名為 `todo` 的目錄，然後打開命令列執行以下指令，切換到該目錄並為其進行初始化：
  ```sh
  cd \路徑\todo
  npm init --yes              # 初始化 todo 資料夾
  ```

  你會看到如下的回應：
  ```txt
  Wrote to todo\package.json:

  {
    "name": "todo",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
  }
  ```

  `npm init` 指令，會在專案資料夾建立一個 `package.json` 檔案，協助追蹤專案所需的套件以及專案工具的設定。

### 1-2-2 建立編譯器設定檔
  我們在前面安裝的 `TypeScript 編譯器 tsc`，可將 `TypeScript` 程式碼編譯為 `純 JavaScript` 程式碼。
  現在先幫 `tsc` 編譯器定義其設定。

  在 todo 目錄新增一個名為 `tsconfig.json` 的檔案，輸入以下內容：
  ```json
  {
    "compilerOptions": {
      "target": "es2020",
      "outDir": "./dist",
      "rootDir": "./src",
    }
  }
  ```

  - `target`：設定使用哪個版本作為編譯目標。
  - `outDir`：編譯出來後要擺放的目錄。
  - `rootDir`：TypeScript 原始碼目錄。

### 1-2-3 新增 TypeScript 程式檔

## 1-3 本章總結

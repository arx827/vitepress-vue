---
title: TypeSctipt 邁向專家之路
---

# 第一篇 TypeScript 入門準備
---
# 05 使用 TypeScript 編譯器

## 5-1 本章行前準備
### 5-1-1 建立 tools 專案
  - 新增 tools 目錄
  - 打開命令提示字元
  - 切換到該目錄，執行初始化
    ```sh
    npm init --yes
    ```
    > 如果不加 `--yes`(或者 `-y` )，`Node.js` 會詢問一些建立 `package.json` 的選項。

  - 完成後，繼續安裝相關套件
    ```sh
    npm install --save-dev typescript@4.3.5
    npm install --save-dev tsc-watch@4.0.0
    ```

    > `--save-dev` 參數，用來告訴 `npm` 工具，這些是開發時要用的套件、不是隨著應用程式發布的東西，也可以在套件名稱後面使用 `@latest` 或 去掉 `@` 及 版本號來下載最新版本。

  - 建立 `TypeScript` 編譯器的 組態設定檔，在 tools 目錄下新增一個 `tsconfig.json` 檔案。
    ```json
    {
      "compilerOptions": {
        "target": "es2020",
        "outDir": "./dist",
        "rootDir": "./src",
      }
    }
    ```

    > 可使用指令來產生 `tsconfig.json`
      ```sh
      tsc --inin
      ```

### 5-1-2 了解專案的結構
  ```sh
  \tools
    \dist
      index.js
    \node_modules
      ...
    \src
      index.ts
    package-lock.json
    package.json
    tsconfig.json
  ```

  | 名稱                  | 說明                                      |
  |-----------------------|-----------------------------------------|
  | `dist` (distribution) | 存放 `TypeScript` 編譯器的輸出結果。         |
  | `node_modules`        | 存放應用程式與開發工具所需的套件              |
  | `src` (source)        | 存放準備要進行編譯的 `TypeScript` 原始碼檔案』 |
  | `package-lock.json`   | 這個檔案包含專案套件的完整相依性列表。         |
  | `package.json`        | 這個檔案包含專案頂層套件的相依性設定。         |
  | `tsconfig.json`       | 這個檔案包含 `TypeScript` 編譯器的設定資料    |

## 5-2 套件管理與 package.json
### 5-2-1 使用 NPM 安裝套件
  `TypeScript` 與 `JavaScript` 專案的開發必須仰賴許多套件，而這些套件已經發展成豐富的生態系。

  `Node.js` 的 `NPM` 工具可協助下載這些套件，並將它們加到專案的 `node_modules` 目錄底下。`NPM` 會根據它們的相依鏈找出每個套件需要的版本，並下載必須的額外檔案。

  專案根目錄下的 `package.json` 檔案，便是用來記錄使用者以 `npm install` 指令加入的套件。

  | 名稱         | 說明                                                                                                                     |
  |--------------|------------------------------------------------------------------------------------------------------------------------|
  | `tsc-watch`  | 用來機看原始碼目錄，並且在偵測到變動時，自動啟動編譯器、執行編譯出來的 `JavaScript` 程式碼，相當於 `TypeScript` 版本的 `nodemon` 套件。 |
  | `typescript` | 包含 `TypeScript` 編譯器以及相關工具。                                                                                      |

  - #### 版本號格式
    | 格式               | 描述                                                                                                                         |
    |--------------------|-----------------------------------------------------------------------------------------------------------------------------|
    | 4.3.5              | 直接寫出版本編號，表示只接受這個版本，例如：4.3.5版。                                                                               |
    | *                  | *星號表示接受任何版本                                                                                                          |
    | >4.3.5<br> >=4.3.5 | 任何大於、或大於等於此版本的套件均可使用。                                                                                         |
    | <4.3.5<br> <=4.3.5 | 任何小於、或大於等於此版本的套件均可使用。                                                                                         |
    | ~4.3.5             | 加上 `~` 表示修訂版本號 (revision version number, 版本編號三個數字中的最後一個) 以外的版本編號相同即可。                                |
    | ^4.3.5             | 加上 `^` 表示只要主版號 (major version number) 相同，次版本號 (minor version number) 或 修訂版本號不同也可接受。 以外的版本編號相同即可。 |

  - #### 常用的 npm 指令
    | 指令                                                             | 說明                                                                                                                             |
    |------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
    | `npm install`                                                    | 在本地安裝 `package.json` 設定檔內已記錄的所有套件(NPM 會試著尋找符合條件的最新版本)。                                            |
    | `npm install 套件@版本`                                          | 在本地安裝此套件的指定版本(`@latest` 代表最新版)，並更新 `package.json` 檔案裡面的 `dependencies` 紀錄                            |
    | `npm install 套件`                                               | 同上，但安裝此套件登陸的最新版本                                                                                                  |
    | `npm install --save-dev 套件@版本`<br>`npm install -D 套件@版本` | 在本地安裝此討間的指定版本，並更新 `package.json` 檔案裡的 `devDependencies` 紀錄。此套件會成為開發所需的套件，而非應用程式的一部分 |
    | `npm install --global 套件@版本`<br>`npm install -g 套件@版本`   | 在全域安裝此套件的指定版本(不會更新專案的 `package.json`)                                                                        |
    | `npm list`                                                       | 列出所有本地安裝的套件                                                                                                           |
    | `npm list --global`<br>`nmp list --g`                            | 列出所有全域安裝的套件                                                                                                           |
    | `npm run`                                                        | 執行 `package.json` 檔案中『 `scripts` 』區塊定義的程式碼                                                                          |
    | `npx 套件`                                                       | 執行一個套件工具。`NPX (Node Package Execute)` 是附加在 `NPM` 內的套件執行工具                                                    |
  
  > 千萬別修改 `dist` 目錄下的檔案，因為下次執行編譯器時，他們就會被覆蓋。

### 5-2-2 了解 TypeScript 編譯器的組織設定檔案
  `TypeScript` 的許多功能，譬如靜態型別系統，是透過 `TypeScript 編譯器` `tsc` (即 `TypeScript Compiler`) 來實現的。
  `TypeScript` 程式碼經過它編譯之後，其專屬的關鍵字和表達方式會被 `tsc` 去掉，生成純 `JavaScript` 程式碼。

  `tsc` 有許多設定選項，能調整編譯過程的行為。每個 `TypeScript` 專案都應該建立自己的組態設定檔 (`tsconfig.json`)，好蓋過預設值

  ```json
  {
    "compilerOptions": {
      "target": "es2020",
      "outDir": "./dist",
      "rootDir": "./src",
    }
  } 
  ```

  - #### tsconfig.json 組態選項
    | 名稱             | 說明                                                                                                                   |
    |------------------|-----------------------------------------------------------------------------------------------------------------------|
    | `compilerOption` | 這部分集結了 `TypeScript` 編譯器自身要使用的設定。                                                                          |
    | `target`         | 指定編譯 `JavaScript` 程式碼時，要採用的目標版本。                                                                          |
    | `outDir`         | 指定編譯出來的 `JavaScript` 檔的存放位置。                                                                                 |
    | `rootDir`        | 指定要編譯的 `TypeScript` 檔的存放位置。                                                                                   |
    | `files`          | 指定要編譯的檔案。這會蓋過編譯器預設的行為 (讓編譯器自行搜尋檔案來編譯)。                                                          |
    | `include`        | 以檔名規則指定編譯時要包含哪些檔案。若無特別指定，預設會選擇 `.tx`, `.tsx`, 與 `.d.ts` 副檔名的檔案。                              |
    | `exclude`        | 指定編譯時要排除哪些檔案。                                                                                                 |
    | `compileOnSave`  | 若為 `true`，這是在告訴程式編輯器說，說檔案每次儲存後都要執行 `tsc 編譯器`。不是每個開發環境都支援此功能，更何況 `watch` 功能反而更實用。 |

  - #### 檢查編譯器能存取的檔案
    如果想確認編譯器在進行編譯時找到了哪些檔案，可在 `tsconfig.json` 檔案中的 `compilerOption` 屬性底下加入一行 `"listFiles": true` (啟用 listFiles 設定)，或是直接在命令列執行以下命令：
    ```sh
    tsc --listFiles
    ```

## 5-3 編譯 TypeScript 程式
### 5-3-1 將 TypeScript 編譯為 JavaScript
  `TypeScript` 編譯器在編譯專案時，會檢查 `TypeScript` 程式碼檔案、套用靜態型別等等的檢查，並且刪去 `TypeScript` 語法，以便生成純 `JavaScript` 程式碼。

### 5-3-2 編譯器的錯誤訊息
  `TypeScript` 編譯器會檢查它要編譯的程式碼，確保它符合 `JavaScript` 語言的規範，並套用靜態型別檢查與存取控制關鍵字等功能，遇到錯誤便會在主控台丟出訊息。
  ```ts
  function printMessage(msg: string): void {
    console.log(`Message: ${msg}`);
  }
  printMessage("Hello, TypeScript");
  printMessage(100);    // 傳入型別不正確的引數 (要求字串卻得到數值)
  ```

  ```sh
  tsc

  src/index.ts:5:14 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
  5 printMessage(100); <-- 錯誤發生位置

  Found 1 error.
  ```

  為了觸發它重新進行渲染
## 5-4 設定編譯輸出版本
## 5-5 常用的編譯器設定
## 5-6 本章總結
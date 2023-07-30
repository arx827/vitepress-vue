---
title: Vue3 - vue2.x 轉 vue3.x
---

# vue2.x 轉 vue3.x
## 如何從 Vue CLI 轉 Vite
- ### 步驟 1： 更新依賴
  遷移到 `Vite` 的第一步是更新 `package.json` 中的依賴項，需要刪除與 `Vue CLI` 相關的依賴項。
  ```json {2-6}
  // package.json
  "@vue/cli-plugin-babel": "~4.5.0",    // remove
  "@vue/cli-plugin-eslint": "~4.5.0",   // remove
  "@vue/cli-plugin-router": "~4.5.0",   // remove
  "@vue/cli-plugin-vuex": "~4.5.0",     // remove
  "@vue/cli-service": "~4.5.0",         // remove
  ```

  刪除 模板編譯器
  ```json {2}
  // package.json
  "vue-template-compiler": "^2.6.11",    // remove
  ```
  
  最後，添加 `Vite` 依賴項，以及 `Vite` 的 `Vue` 插件組件，以支持單文件組件。
  ```json
  // package.json
  "@vitejs/plugin-vue": "^1.6.1",
  "vite": "^2.5.4",
  ```

- ### 步驟 2： 僅提供對主流瀏覽器的支持
  意味著可以完全從依賴項中移除 `Babel`。
  
  首先，要刪除 `babel.config.js` 文件，或從 `package.json` 中，可找到 `babel` 相關參數。

  接下來刪除 `package.json` 中的 `babel` 相關的依賴項。
  ```json {2-3}
  // package.json
  "babel-eslint": "^10.1.0",    // remove
  "core-js": "3.6.5",           // remove
  ```

  隨著 `babel-eslint` 被移除後，需要將它作為解析器從 `.eslintrc` 文件中移除。
  ```js
  // .eslintrc
  parserOptions: {
    parser: "babel-eslint",
  }
  ```

  最後，在 `.eslintrc` 中，需要將環境從 `node` 更新到 `es2021`。
  ```js {3}
  // .eslintrc
  env: {
    node: true,   // remove
    es2021: true,
  }
  ```

  升級 `eslint` 版本，以及 `eslint-plugin-vue` 以支持 `es2021` 環境。
  ```sh
  npm install eslint@8 eslint-plugin-vue@8
  ```

- ### 步驟 3： 添加 Vite 配置

---
title: Vue3 - vue2.x 轉 vue3.x
---

# vue2.x 轉 vue3.x (生成器篇)
<!-- ## 如何從 Vue CLI 轉 Vite
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

- ### 步驟 3： 添加 Vite 配置 -->

## package.json
  更改 依賴套件
  - ### scripts 運行指令
    將 `vue-cli-service` 改為 `vite`
    ```json
    // remove
    "scripts": {
      "serve": "vue-cli-service serve --mode local",
      "build": "vue-cli-service build --mode development",
      "build:dev": "vue-cli-service build --mode development",
      "build:uat": "vue-cli-service build --mode uat",
      "build:prod": "vue-cli-service build --mode production",
      "lint": "vue-cli-service lint --fix"
    },

    // add
    "scripts": {
      "dev": "vite --mode development --port 8200",
      "build": "run-p type-check build-only",
      "build:dev": "vite build --mode development",
      "build:uat": "vite build --mode uat",
      "build:prod": "vite build --mode production",
      "preview": "vite preview",
      "build-only": "vite build",
      "type-check": "vue-tsc --noEmit",
      "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
    },
    ```

  - ### dependencies
    ```json
    // remove
    "dependencies": {
      "@fubonlife/vue2-datepicker": "3.9.5",
      "@popperjs/core": "^2.11.5",
      "@vue/eslint-config-airbnb": "^5.3.0",
      "ant-design-vue": "1.7.2",
      "babel-plugin-import": "^1.13.5",
      "bootstrap": "5.1.3",
      "core-js": "^3.22.2",
      "eslint-plugin-import": "^2.26.0",
      "vue": "2.6.14",
      "vue-class-component": "^7.2.6",
      "vue-property-decorator": "^8.5.1",
      "vue-router": "^3.5.3",
      "vue-rx": "^6.2.0",
      "vue-uuid": "2.1.0",
      "vuex": "^3.6.2",
      "vuex-class": "0.3.2"
    },

    // add
    "dependencies": {
      "@fubonlife/vue-datepicker-next": "1.0.8",
      "@popperjs/core": "2.11.6",
      "bootstrap": "5.2.2",
      "ant-design-vue": "3.2.14",
      "@ant-design/icons-vue": "6.1.0",
      "axios": "0.21.1",
      "vite-svg-loader": "3.6.0",
      "vue": "3.2.41",
      "vue-router": "4.1.5",
      "vue-uuid": "3.0.0",
      "pinia": "2.0.23"
    },
    ```
    
  - ### devDependencies
    ```json
    // remove
    "devDependencies": {
      "@typescript-eslint/eslint-plugin": "^2.34.0",
      "@typescript-eslint/parser": "^2.34.0",
      "@vue/cli-plugin-babel": "^4.5.8",
      "@vue/cli-plugin-eslint": "^4.5.8",
      "@vue/cli-plugin-router": "^4.5.8",
      "@vue/cli-plugin-typescript": "^4.5.8",
      "@vue/cli-service": "^4.5.8",
      "@vue/eslint-config-typescript": "^5.1.0",
      "babel-eslint": "^10.1.0",
      "eslint": "^6.8.0",
      "eslint-plugin-vue": "^6.2.2",
      "less": "^3.12.2",
      "less-loader": "^7.1.0",
      "sass": "~1.32.12",
      "sass-loader": "^10.2.0",
      "replace-in-file-webpack-plugin": "1.0.6",
      "terser-webpack-plugin": "^4.2.3",
      "typescript": "^3.9.7",
      "vue-template-compiler": "^2.6.12"
    },

    // add
    "devDependencies": {
      "@rushstack/eslint-patch": "1.1.4",
      "@types/node": "16.11.68",
      "@vitejs/plugin-vue": "3.1.2",
      "@vue/eslint-config-prettier": "7.0.0",
      "@vue/eslint-config-typescript": "11.0.0",
      "@vue/tsconfig": "0.1.3",
      "eslint": "8.22.0",
      "eslint-plugin-vue": "9.3.0",
      "less": "4.1.3",
      "less-loader": "11.1.0",
      "npm-run-all": "4.1.5",
      "prettier": "2.7.1",
      "sass": "1.56.0",
      "typescript": "4.7.4",
      "unplugin-auto-import": "0.12.1",
      "unplugin-vue-components": "0.22.9",
      "vite": "3.1.8",
      "vite-plugin-filter-replace": "0.1.11",
      "vite-plugin-html": "3.2.0",
      "vue-jwt-decode": "0.1.0",
      "vue-tsc": "1.0.13"
    }
    ```

  - ### browserslist
    ```json
    // remove
    "browserslist": [
      "> 1%",
      "last 2 versions",
      "not dead"
    ]
    ```
  
## babel.config.js
  - `remove`
  
## eslint
  - `remove` .eslintrc.js
  - `add` .eslintrc.cjs
    ```js
    /* eslint-env node */
    require('@rushstack/eslint-patch/modern-module-resolution')

    module.exports = {
      root: true,
      extends: [
        'plugin:vue/vue3-essential',
        'prettier',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier',
      ],
      plugins: ['prettier'],
      parserOptions: {
        ecmaVersion: 'latest',
      },
      rules: {
        'vue/no-deprecated-slot-attribute': 0,
        'vue/multi-word-component-names': 0, // 檔案名稱需要多詞避免重複
        'vue/valid-v-slot': 0,
      },
    }
    ```
  - `add` .eslintignore
    ```
    # unplugin-vue-components 自動產生的檔案
    src/autoComponents.ts
    src/autoComponents.d.ts
    ```

## typeSctipt
  - tsconfig.json
    ```json
    // remove
    {
      "compilerOptions": {
        "target": "esnext",
        "module": "esnext",
        "strict": true,
        "strictNullChecks": false,
        "jsx": "preserve",
        "importHelpers": true,
        "moduleResolution": "node",
        "experimentalDecorators": true,
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "noImplicitAny": false,
        "sourceMap": true,
        "baseUrl": ".",
        "types": [
          "webpack-env"
        ],
        "paths": {
          "@/*": [
            "src/*"
          ]
        },
        "lib": [
          "esnext",
          "dom",
          "dom.iterable",
          "scripthost"
        ]
      },
      "include": [
        "src/**/*.ts",
        "src/**/*.tsx",
        "src/**/*.vue",
        "tests/**/*.ts",
        "tests/**/*.tsx", "src/api/index.js"
      ],
      "exclude": [
        "node_modules"
      ],
      "files": [
        "src/shims-vue.d.ts",
        "src/shims-tsx.d.ts",
      ]
    }

    // add
    {
      "extends": "@vue/tsconfig/tsconfig.web.json",
      "module": "esnext",
      "include": [
        "env.d.ts",
        "src/**/*",
        "src/**/*.vue",
        "jsconfig.json",
      ],
      "exclude": ["node_modules/**"],
      "compilerOptions": {
        "target": "esnext",
        "baseUrl": ".",
        "paths": {
          "@/*": ["./src/*"],
          "@assets/*": ["./src/assets/*"],
          "@style/*": ["./src/assets/style/*"],
          "@imgs/*": ["./src/assets/imgs/*"],
          "@components/*": ["./src/components/*"],
          "@layout/*": ["./src/components/layout/*"],
          "@shared/*": ["./src/components/shared/*"],
          "@pages/*": ["./src/pages/*"],
          "@stores/*": ["./src/stores/*"],
          "@plugins/*": ["./src/plugins/*"],
        },
        "types": ["vite-svg-loader", "vite/client"],
        "noImplicitAny": false,
        "strictNullChecks": false,
        "skipLibCheck": true,
      },
      "references": [
        {
          "path": "./tsconfig.config.json"
        }
      ],
    }
    ```

  - `add` tsconfig.config.json
    ```json
    {
      "extends": "@vue/tsconfig/tsconfig.node.json",
      "include": ["vite.config.*", "vitest.config.*", "cypress.config.*", "playwright.config.*"],
      "compilerOptions": {
        "composite": true
      },
      "files": [
        // "env.d.ts",
        "src/shims-vue.d.ts",
        "src/shims-tsx.d.ts"
      ]
    }
    ```

## config
  - `remove` vue.config.js
    ```js
    const UglifyJsPlugin = require("terser-webpack-plugin");
    const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

    const stringReplace = require('./stringReplace.json');

    const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
    const IS_UAT = ['uat', 'ut'].includes(process.env.NODE_ENV);

    module.exports = {
      runtimeCompiler: true,
      publicPath: process.env.PUBLIC_PATH !== undefined ? process.env.PUBLIC_PATH : '/',
      configureWebpack: config => {
        // enable source-map
        config.devtool = 'source-map';

        config.output.filename = 'js/[name].[hash:8].js';
        config.output.chunkFilename = 'js/[name].[hash:8].js';

        // enable uglify
        if (IS_PROD || IS_UAT) {
          const plugins = [];
          plugins.push(
            new UglifyJsPlugin({
              terserOptions: {
                warnings: true,
                output: {
                  comments: false,
                  beautify: false,
                },
                compress: {
                  drop_console: true,
                  drop_debugger: true,
                }
              },
              parallel: true
            })
          );

          plugins.push(new ReplaceInFileWebpackPlugin([
            {
              dir: 'dist/js',
              test: [/\.js$/, /\.js\.map$/],
              rules: [
                // 套用 stringReplace.json 裡面的 替換列表
                ...stringReplace.options.map((i) => ({
                  search: new RegExp(i.search, 'ig'),
                  replace: i.replace,
                })),

                // ----- 若想使用 全局替代的話 可以改用以下語法 ------ //
                // // 針對 版本號 替換
                // {
                //   search: /(\w+)@((\d\.)+\d)/ig,
                //   replace: '$1_$2',
                // },
                // // 針對 Email 替換
                // {
                //   search: /(\w+)@(([\da-z.-]+)\.com)/ig,
                //   replace: '$1_$2',
                // },
              ],
            },
          ]));
          config.plugins = [...config.plugins, ...plugins];
        }
      },
      css: {
        loaderOptions: {
          less: {
            lessOptions: {
              modifyVars: {
                'border-radius-base': '0px',
                // For compacted styling:
                // 'padding-lg': '24px',
                // 'padding-md': '16px',
                // 'padding-sm': '12px',
                // 'padding-xs': '8px',
                // 'table-padding-vertical': '4px',
                // 'border-color-base': '#d9d9d9',
                // 'border-width-base': '1px',
              },
              javascriptEnabled: true
            }
          },
        }
      }
    }
    ```

  - `add` vite.config.ts
    ```ts
    import { defineConfig, loadEnv, type JsonOptions, splitVendorChunkPlugin } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import Components from 'unplugin-vue-components/vite'
    import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
    import { createHtmlPlugin } from 'vite-plugin-html'
    import svgLoader from 'vite-svg-loader'
    import filterReplace from 'vite-plugin-filter-replace'

    interface stringReplaceType {
      options: {
        search: string,
        replace: string
      }[]
    }

    const stringReplace: stringReplaceType = require('./src/plugins/filterReplace/stringReplace.json');

    import { resolve } from 'path'

    function pathResolve(dir: string) {
      return resolve(__dirname, '.', dir)
    }

    // https://cn.vitejs.dev/config/
    export default defineConfig(({ mode }) => {
      // 環境變數
      const env = loadEnv(mode, process.cwd())
      const IS_PROD = ['production', 'prod', 'uat'].includes(mode)

      return {
        base: env.VITE_BASE_URL ? env.VITE_BASE_URL : '/',
        build: {
          outDir: `dist`,
          assetsDir: 'static',
          // sourcemap: !IS_PROD,
          // copyPublicDir: true,
          rollupOptions: {
            output: {
              assetFileNames: assetInfo => {
                if (assetInfo.name) {
                  // 利用附檔名產生資料夾
                  const info = assetInfo.name.split('.')
                  let extType = info[info.length - 1]
                  if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
                    extType = 'media'
                  } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
                    extType = 'imgs'
                  } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
                    extType = 'fonts'
                  }
                  return `${extType}/[name]-[hash][extname]`
                }
                return ''
              },
              chunkFileNames: 'js/[name]-[hash].js',
              entryFileNames: 'js/[name]-[hash].js',
            },
          },
        },
        plugins: [
          vue(),
          Components({
            // 從 `./src/components/` 路徑查找
            resolvers: [
              // ant design vue 按需載入
              AntDesignVueResolver({
                // 自動引入 ant-design/icons-vue 中的圖標，須先安裝 @ant-design/icons-vue
                resolveIcons: true,
                importStyle: 'less',
              }),
            ],
            include: [/\.vue$/, /\.vue\?vue/],
            exclude: [/[/]node_modules[/]/, /[/].git[/]/, /[/].nuxt[/]/],
            dts: 'src/autoComponents.d.ts',
          }),
          createHtmlPlugin({
            inject: {
              data: {
                ...env,
              },
            },
          }),
          svgLoader({
            defaultImport: 'component',
          }),
          splitVendorChunkPlugin(),
          filterReplace([
            {
              filter: /\.js$/,
              replace : [
                // 套用 stringReplace.json 裡面的 替換列表
                ...stringReplace.options.map((i) => ({
                  from: new RegExp(i.search, 'ig'),
                  to: i.replace,
                })),

                // ----- 若想使用 全局替代的話 可以改用以下語法 ------ //
                // 針對 版本號 替換
                // {
                //   from: /(\w+)@((\d\.)+\d)/ig,
                //   to: '$1_$2',
                // },
                // // 針對 Email 替換
                // {
                //   from: /(\w+)@(([\da-z.-]+)\.com)/ig,
                //   to: '$1_$2',
                // },
              ]
            }
          ]),
        ],
        resolve: {
          alias: {
            '@': pathResolve('src'),
            '@assets': pathResolve('src/assets'),
            '@style': pathResolve('src/assets/style'),
            '@imgs': pathResolve('src/assets/imgs'),
            '@components': pathResolve('src/components'),
            '@layout': pathResolve('src/components/layout'),
            '@shared': pathResolve('src/components/shared'),
            '@pages': pathResolve('src/pages'),
            '@stores': pathResolve('src/stores'),
            '@plugins': pathResolve('src/plugins'),
            '~bootstrap': pathResolve('node_modules/bootstrap'),
          },
        },
        json: {
          stringify: true, // 導入的JSON會被轉換為 export default JSON.parse(...)，當JSON文件較大的時候，性能更好
        },
        // 全域CSS
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: `
                @import "@style/_varibles.scss";
                @import "@style/_mixin.scss";
              `,
            },
            less: {
              modifyVars: {
                // https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less
                'border-radius-base': '4px',
                'table-header-bg': '#23C4A8',
                'table-header-color': '#FFF',
                'table-row-hover-bg': '#E6F7FF',
                'table-border-radius-base': '0px',

                // menu
                'menu-dark-bg': '#30ACB3',
                'menu-dark-submenu-bg': '#02829B',
                'menu-dark-inline-submenu-bg': 'transparent',
                'menu-dark-item-active-bg': '#02829B',

                // table
                'table-header-sort-bg': '#02829B',
                'table-body-selected-sort-bg': '#02829B',
                'table-header-bg-sm': '#23C4A8',
              },
              javascriptEnabled: true,
            },
          },
          devSourcemap: true,
        },
        // 代理服務設定 https://cn.vitejs.dev/config/server-options.html
        server: {
          proxy: {
            '^/api': {
              port: 8200,
              target: env.VITE_APP_API_BASE_URL,
              ws: true,
              changOrigin: true,
            },
          },
        },
      }
    })
    ```
## 其他
  - `add` .prettierrc.json
    ```json
    {
      "tabWidth": 2,
      "useTabs": false,
      "printWidth": 120,
      "semi": false,
      "singleQuote": true,
      "arrowParens": "avoid",
      "trailingComma": "all",
      "bracketSpacing": true,
      "jsxSingleQuote": true,
      "jsxBracketSameLine": false,
      "insertPragma": false,
      "ignorePath": ".prettierignore",
      "endOfLine": "auto"
    }
    ```
  
  - `add` env.d.ts
    ```ts
    /// <reference types="vite/client" />
    /// <reference types="vite-svg-loader" />
    ```

## .env 環境變數
  - 將 `VUE_APP_xxx` 改為 `VITE_APP_xxx`
  - 使用時，將 `process.env.xxx` 改為 `import.meta.env.xxx`

## index.html 
  - ### 位置搬遷
    - (vue2) `/public/index.html`
    - (vue3) `/index.html` (根目錄)

  - ### 移除 <%= BASE_URL %> 站位符
    ```html
    <!-- remove -->
    <link rel="icon" href="<%%= BASE_URL %%>favicon.ico">

    <!-- add -->
    <link rel="icon" href="/icon/favicon.ico">
    ```

## src
  - ### main.ts
    Ant Design Vue 按需加載，改由 `unplugin-vue-components` 套件自動處理
    - #### vue2
      ```ts
      import Vue from 'vue';
      import VueRouter from 'vue-router'
      import { Row, Col, Button, Layout, Menu, Icon, PageHeader, Avatar, Dropdown, 
        Modal, Spin, Form, FormModel, Input, Select, InputNumber, Tag, DatePicker, 
        Table, Divider, Badge, message, Tree, Switch, TreeSelect } from 'ant-design-vue';
      import Space from 'ant-design-vue/lib/space';
      import 'ant-design-vue/lib/space/style';
      import App from './App.vue'
      import router from './router'
      import Api from './plugins/api'
      import VueRx from 'vue-rx';
      import User from './plugins/user';

      Vue.use(VueRx)
      Vue.use(Api, {});
      Vue.use(User, { router, message });
      Vue.use(VueRouter);
      Vue.use(FormModel);
      Vue.use(Modal);
      Vue.component(Space.name, Space);
      Vue.component(Button.name, Button);
      Vue.component(Select.name, Select);
      Vue.component(Select.Option.name, Select.Option);
      Vue.component(Row.name, Row);
      Vue.component(Col.name, Col);
      Vue.component(Layout.name, Layout);
      Vue.component(Layout.Sider.name, Layout.Sider);
      Vue.component(Layout.Header.name, Layout.Header);
      Vue.component(Layout.Content.name, Layout.Content);
      Vue.component(Layout.Footer.name, Layout.Footer);
      Vue.component(Menu.name, Menu);
      Vue.component(Menu.SubMenu.name, Menu.SubMenu);
      Vue.component(Menu.Item.name, Menu.Item);
      Vue.component(PageHeader.name, PageHeader);
      Vue.component(Avatar.name, Avatar);
      Vue.component(Icon.name, Icon);
      Vue.component(Dropdown.name, Dropdown);
      Vue.component(Modal.name, Modal);
      Vue.component(Spin.name, Spin);
      Vue.component(Form.name, Form);
      Vue.component(Form.Item.name, Form.Item);
      Vue.component(FormModel.name, FormModel);
      Vue.component(FormModel.Item.name, FormModel.Item);
      Vue.component(Input.name, Input);
      Vue.component(InputNumber.name, InputNumber);
      Vue.component(Tag.name, Tag);
      Vue.component(DatePicker.name, DatePicker);
      Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker);
      Vue.component(Table.name, Table);
      Vue.component(Table.ColumnGroup.name, Table.ColumnGroup);
      Vue.component(Table.Column.name, Table.Column);
      Vue.component(Divider.name, Divider);
      Vue.component(Badge.name, Badge);
      Vue.component(Tree.name, Tree);
      Vue.component(Switch.name, Switch);
      Vue.component(TreeSelect.name, TreeSelect);

      Vue.config.productionTip = false

      new Vue({
        router,
        render: h => h(App)
      }).$mount('#app')
      ```
    - #### vue3
      ```ts
      import { createApp } from 'vue'
      import { createPinia } from 'pinia'

      import App from './App.vue'
      import Router from './router'
      import Api from '@plugins/api'

      import Global from '@plugins/global'
      import EnumData from '@plugins/global/enumData'

      import NumberUtil from '@plugins/util/numberUtil'
      import DateTimeUtil from '@plugins/util/dateTimeUtil'
      import ValidateUtil from '@plugins/util/validateUtil'
      import BlobUtils from '@plugins/util/blobUtil'

      import Message from '@plugins/message'
      import Notification from '@plugins/notification'
      import Modal from '@plugins/modal'
      import User from '@plugins/user'

      import { useRoute } from 'vue-router'
      import DatePicker from '@fubonlife/vue-datepicker-next/index.es.js'
      import ZhTW from '@fubonlife/vue-datepicker-next/locale/zh-tw.es'
      import '@fubonlife/vue-datepicker-next/index.css'
      import './assets/style/layout.scss'

      const app = createApp(App)

      app.use(createPinia())
      app.use(Api)

      app.use(Global, { Router })
      app.use(EnumData)
      app.use(User, { Router })
      app.use(NumberUtil, { EnumData, ValidateUtil })
      app.use(DateTimeUtil, { Global, EnumData })
      app.use(ValidateUtil, { Global, EnumData })
      app.use(BlobUtils)

      app.use(Message)
      app.use(Notification)
      app.use(Modal)

      app.use(Router)

      // https://github.com/mengxiong10/vue-datepicker-next
      app.component('DatePicker', DatePicker)

      DatePicker.locale('zh-tw', {
        formatLocale: ZhTW.formatLocale,
        yearFormat: 'YYYY',
        twCanlender: true, // 打開民國年顯示模式
      })
      app.mount('#app')
      ```
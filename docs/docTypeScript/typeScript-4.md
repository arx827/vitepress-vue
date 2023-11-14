---
title: TypeSctipt 邁向專家之路
---

# 第一篇 TypeScript 入門準備
---
# 04 JavaScript 快速入門(下)
  本章將繼續解說有助於理解 `TypeScript` 開發的 `JavaScript` 型別系統，但重心會放在 `JavaScript` 對物件的支援，包括定義物件的不同方式、以及它們與 `JavaScript` 類別 (`class`) 的關係。也會示範如何處理值的序列、`JavaScript` 的集合，最後則來看 模組 (`module`) 機制，可把一個專案拆分成多個 `JavaScript` 檔案。

## 4-1 本章行前準備
  為了建立 `primer2` 專案，請在電腦中選擇一個位置新增 `primer` 目錄，然後於命令提示字元或終端機，從該目錄的位置初始化它：
  ```sh
  \primer2> npm init --yes
  ```

  接著新增一個 `index.js` 檔案，並輸入以下的程式碼：
  ```js
  // \primer2\index.js

  let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
      return Number(this.price) * 1.2;
    }
  };

  console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);
  ```

## 4-2 了解 JavaScript 的物件繼承
### 4-2-1 原型 (prototype) 物件
  和其他物件導向語言不同，`JavaScript` 並沒有類別；它的所有物件，其實都連結到一個 `原型物件`，並且會從該物件繼承屬性與方法。

  原型物件本身也是物件，它們也有自己的原型物件，使得物件之間會形成一條 `原型鏈 (prototype chain)`。

  ```js {10}
  let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
      return Number(this.price) * 1.2;
    }
  };

  console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);
  console.log(`toString: ${hat.toString()}`);
  ```

  第二行指令呼叫了一個 `toString()` 方法，可是並沒有先幫 `hat` 物件定義 `toString` 屬性。這使得 `JavaScript` 執行環境轉而查看 `hat` 物件上游的原型，也就是 `Object` 物件。

### 4-2-2 檢視與修改原型物件
  `JavaScript` 內建的 `Object` 不僅是絕大多數物件的原型，它本身也提供了一些不必繼承便可直接使用的方法，可藉此來取得與原型物件相關的資訊。

  | 方法                    | 說明                 |
  |-------------------------|---------------------|
  | `getPrototypeOf()`      | 傳回物件的原型物件     |
  | `setPrototypeOf(物件)`  | 設定物件的原型物件     |
  | `getOwnPropertyNames()` | 傳回物件自有屬性的名稱 |

  > 物件的 `Prototype` 屬性也可讓我們存取或修改原型物件，但這麼做對 `JavaScript` 執行環境來說，是沉重的負擔。如果可以的話，建議還是使用上表列出的方法。

  ```js
  let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
      return Number(this.price) * 1.2;
    }
  };
  let boots = {
    name: "Boots",
    price: 100,
    getPriceIncTax() {
      return Number(this.price) * 1.2;
    }
  };

  let hatPrototype = Object.getPrototypeOf(hat);
  console.log(`Hat Prototype: ${hatPrototype}`);
  let bootsPrototype = Object.getPrototypeOf(boots);
  console.log(`Boots Prototype: ${bootsPrototype}`);
  console.log(`Common prototype: ${hatPrototype === bootsPrototype}`);
  ```

  結果顯示 `hat` 與 `boots` 物件共想著同一個原型物件(`Object 物件`)。


## 4-3 在 JavaScript 使用類別 (class)
## 4-4 走訪器與產生器的使用
## 4-5 JavaScript 集合的操作
## 4-6 撰寫與匯入 JavaScript 模組
## 4-7 本章總結
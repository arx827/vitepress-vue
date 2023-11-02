---
title: TypeSctipt 邁向專家之路
---

# 第一篇 TypeScript 入門準備
---
# 03 JavaScript 快速入門(上)
  要有效利用 `TypeScript` 進行開發，首先就得理解 `JavaScript` 是如何處理資料型別的。只要弄懂 `JavaScript` 如何運作，不僅能讓 `TypeScript` 變得容易上手，還能更清楚 `TypeScript` 提供了哪些好處、這些功能又如何運作。

## 3-1 本章行前準備
  - 進入本章主題之前，得建立一個練習用的專案。在想要建置專案的位置，新增一個名為 `primer` 的資料夾，然後在命令列切換到 `primer` 目錄底下，執行以下指令來初始化它：
    ```sh
    \primer> npm init --yes
    ```

  - 接著，可以在此專案安裝一個名為 `nodemon` 的套件，它的功能是能自動監看 `JavaScript` 檔案的變更，並重新執行之。`nodemon` 的安裝方式，是在 `primer` 目錄底下執行下列指令：
    ```sh
    \primer> npm install nodemon@2.0.12

    ##  這指令會自動下載 `nodemon` 的套件，並安裝在 `primer` 資料夾底下。
    ```
   

  - 安裝完成後，請在 `primer` 目錄底下，建立一個名為 `index.js` 的檔案，寫入：
    ```js
    // \primer\index.js

    let hatPrice = 100;
    console.log(`Hat price: ${hatPrice}`);
    ```

  - 接著執行以下指令，開始監看 `JavaScript` 檔案的變動：
    ```sh
    \primer> npx nodemon index.js

    [nodemon] 2.0.12
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js, mjs, json
    [nodemon] starting `node index.js`
    Hat price: 100   ## 執行結果
    [nodemon] clean exit - waiting for changes before restart
    ```

  - 為確保 `nodemon` 能正確偵測到檔案內容變更，請試著在 `index.js` 加入以下內容：
    ```js
    let hatPrice = 100;
    console.log(`Hat price: ${hatPrice}`);
    let bootsPrice = "100";
    console.log(`Boots price: ${bootsPrice}`);
    ```

  - 當一儲存檔案，`nodemon` 套件應該能偵測到 `index.js` 的內容已經改變，並自動重新執行其程式碼。
    ```sh
    [nodemon] restarting due to changes...    ## nodemon 偵測到變更，重新執行
    [nodemon] starting `node index.js`
    Hat price: 100
    Boots price: 100    ## 新程式的執行結果
    [nodemon] clean exit - waiting for changes before restart
    ```

  - 若要停止 `nodemon`，在命令行按下 `Ctrl` + `C`，並輸入 `Y` 確認結束。

## 3-2 JavaScript 的令人困惑之處
  - 有時 `JavaScript` 會發生預料之外的結果，最主要的原因往往在於 `JavaScript` 的型別系統。以下是典型的例子：
    ```js
    // 修改 \primer\index.js

    let hatPrice = 100;   // 值為數值
    console.log(`Hat price: ${hatPrice}`);
    let bootsPrice = "100";   // 值為字串
    console.log(`Boots price: ${bootsPrice}`);

    if(hatPrice == bootsPrice) {    // 判斷 hatPrice 的值是否和 bootsPrice 相等
      console.log("Prices are the same");
    } else {
      console.log("Prices are different");
    }
    let totalPrice = hatPrice + bootsPrice;
    console.log(`Total Price: ${totalPrice}`);
    ```

    執行結果
    ```sh
    Hat price: 100
    Boots price: 100
    Prices are the same
    Total Price: 100100
    ```

    多數程式語言在進行不同型別的運算時，會產生錯誤，但 `JavaScript` 卻不會。字串和數值雖然可以比較，但是相加時會導致兩者相連。

## 3-3 理解 JavaScript 的資料型別
### 3-3-1 JavaScript 的基礎與複合型別
  - #### JavaScript 內建資料型別
    | 名稱                 | 說明                                                                                                                                  |
    |--------------------|-------------------------------------------------------------------------------------------------------------------------------------|
    | `number (數值)`      | 代表數字值。不同於其他語言，`JavaScript` 沒有區分 `整數 (integer)` 與 `浮點數 (floating-point values)`，兩者皆一視同仁視為 `number` 型別 |
    | `string (字串)`      | 代表字串。                                                                                                                             |
    | `boolean (布林)`     | 代表 `true (真)` 與 `false (偽)` 的邏輯值。                                                                                            |
    | `symbol (符號)`      | 表示獨一無二的常數值，例如集合中的 `鍵 (key)`。於 `ES2015 / ES6` 加入                                                                   |
    | `bigint (大整數)`    | 可用來表示超過 `number` 型別範圍 (正負 2⁵³ - 1) 的任何數字。於 `ES2020` 加入                                                           |
    | `null (空值)`        | 這種型別只能指派值 `null`，代表空值或無效的參照。                                                                                       |
    | `undefined (未定義)` | 變數已宣告，但尚未指派任何值，則會視為未定義型別。                                                                                       |
    | `object (物件)`      | 代表複合型別值，這些型別由各別的屬性和值組成。                                                                                          |

    上表的前七項屬於 `JavaScript` 的 `基本型別 (primitive type)`，可以直接使用。`JavaScript` 應用程式中的值，若不是基本型別，就是由基本型別構成的複合型別。

### 3-3-2 基本型別的運用
  其他程式語言多半會強制在宣告變數時，寫明資料型別，才能開始使用之。以 `C#` 語言為例：
  ```c#
  string name = "Adam";
  ```

  但是 `JavaScript` 的邏輯相反，有型別的是 `值本身` 而非變數，變數只是個指向值的名稱罷了，其型別會由值決定。

  `JavaScript` 變數只要被指派不同型別的值，其型別就會跟著改變。

  ```js
  // \primer\index2.js

  let myVariable = "Adam";        // 宣告變數 myVariable 並指派值 "Adam"
  ```

  `JavaScript` 執行環境會自動推論 `myVariable` 的值，究竟屬何種型別。執行環境會曉得以 雙引號 框起來的值必定為 `字串`。

  可用 `typeof` 關鍵字來確認 `myVariable` 變數的型別：

  ```js
  // \primer\index2.js

  let myVariable = "Adam";
  console.log(`Type: ${typeof myVariable}`);

  // Type: string
  ```

  接著，再嘗試指派一個新的值給 `myVariable` 變數：
  ```js
  // 修改 \primer\index2.js

  let myVariable = "Adam";
  console.log(`Type: ${typeof myVariable}`);
  // Type: string

  myVariable = 100;
  console.log(`Type: ${typeof myVariable}`);
  // Type: number
  ```

  > 如果用 `typeof` 關鍵字檢查 `null` 值，得到的答案居然會是 `object`。這是打從 `JavaScript` 設計之初，便存在的奇特現象，至今一直沒有修正，原因是怕影響到太多依賴此種判斷方式的舊程式。

### 3-3-3 理解強制轉型
  在 `JavaScript` 中，當算符 (或稱 運算符，比如加減乘除) 被套用到不同型別的值時，`JavaScript` 執行環境會將其中一個轉換為另一個型別的值，這個過程叫做 `強制轉型 (type coercion)`。

## 3-4 運用函式

## 3-5 陣列的運用

## 3-6 物件的運用

## 3-7 了解 this 關鍵字

## 3-8 本章總結
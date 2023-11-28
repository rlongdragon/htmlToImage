使用[sharp.js](https://www.npmjs.com/package/sharp)輔助[node-html-to-image]()函式庫，使可指定生成圖片的放大倍率以及DPI。

中文文檔 | [English README](./README.md)

# 開始使用

本專案依賴node.js。

你需要先下載sharp和node-html-to-image函式庫。

```bash
npm install sharp
```

```bash
npm install node-html-to-image
```

複製[index.js](./index.js)和[index.html](./index.html)到你的專案資料夾

你可以在在index.html的<body>中製作你的圖片，使用index.js生成你的圖片。

# 參數說明

如要生成圖片，你需要執行index.js的htmlToImage(data)函式

```js
let data = {
  html: require('fs').readFileSync('./index.html', 'utf8'),
  fileName: 'image.png',
  width: 100,
  height: 100,
  scale: 1,
  dpi: 100
}
```

| 參數       | 說明                   | 型別     |
| -------- | -------------------- | ------ |
| html     | html格式，由index.html匯入 | string |
| fileName | 生成圖片的檔名              | string |
| width    | 圖片的寬度                | number |
| height   | 圖片的高度                | number |
| scale    | 圖片縮放倍率               | number |
| dpi      | 設定圖片的dpi             | number |

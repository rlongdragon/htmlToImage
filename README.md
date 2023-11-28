Using [sharp.js](https://www.npmjs.com/package/sharp) in conjunction with the [node-html-to-image](https://www.npmjs.com/package/node-html-to-image) library allows specifying the enlargement factor and DPI for generating images.

English README | [中文文檔](./README-zh_tw.md)

# Getting Started

This project relies on node.js.

You need to download the sharp and node-html-to-image libraries first.

```bash
npm install sharp
```

```bash
npm install node-html-to-image
```

Copy [index.js](./index.js) and [index.html](./index.html) to your project folder.

You can design your image within the `<body>` of index.html and generate your image using index.js.

# Parameter Explanation

To generate an image, you need to execute the `htmlToImage(data)` function in index.js.

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

| Parameter | Description                 | Type   |
| --------- | --------------------------- | ------ |
| html      | HTML format, imported from index.html | string |
| fileName  | Filename for the generated image     | string |
| width     | Width of the image                    | number |
| height    | Height of the image                   | number |
| scale     | Image scaling factor                  | number |
| dpi       | DPI setting for the image             | number |

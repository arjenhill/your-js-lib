# YourJsLib

## Features

很多人都想写一个自己的轮子，可是开始动手的时候你总会遇到以下问题？请用这个基本模版

- 一个基本的 js 库应该如何编写
- 基本的前端项目都要哪些文件
- 又要怎么打包发布到 npm 上
- 你的 es6 语法如何才能让别人识别
- readme 应该如何编写
- 如何添加 eslint
- 怎么才能打包一个 umd 格式文件让 html 直接引用

## Usage

## 直接在页面引用

```html
<script src="js/your-js-lib.min.js"></script>
```

## Or install using npm

```js
npm install your-js-lib --save
...

import YourJsLib from 'your-js-lib';
```

## 目录

```sh
.
├── build # 打包后的项目文件目录
|   ├── your-js-lib.min.js # 压缩后的js项目库文件
|   └── your-js-lib.min.js.map # map文件
├── node_modules # node_modules
|   └── ... # 依赖组件
├── src # src目录
|   ├── core # 源码组件目录
|   └── index.js # 入口文件
├── .babelrc # babel配置文件
├── .gitignore # git忽略提交
├── .npmignore # npm发表忽略提交
├── eslintrc.json # eslin配置及规则说明
├── LICENSE # LICENSE
├── package.json # 包依赖管理文件
├── README.md # 项目使用说明文档
└── rollup.config.js # rollup打包工具配置文档
```

## 开发

开发工作时，我们一般在`src`目录中根据自己的需要创建项目文件或目录，以下两步方式对外 export。

### step1

```js
// `src/core/`
export default a or export {a, b}
```

### step2

```js
// `src/index.js
import YourJsLib from "./core/YourJsLib";
export default YourJsLib;
```

## Build

Node is a dependency, use terminal to install it with with:

### es6 lint

```javascript
npm run lint
```

## 备注

- 开发过程时需要根据自己的开发工具安装eslint插件
- npm包的发布需要自己根据项目名创建

欢迎大家star，提供issues，不断完善本仓库。

## License

LicenseFinder is released under the [MIT](http://www.opensource.org/licenses/mit-license) License.

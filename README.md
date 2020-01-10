YourJsLib
======

## Features

很多人都想写一个自己的轮子，可是开始动手的时候你总会遇到以下问题？请用这个基本模版

* 一个基本的js库应该如何编写  
* 基本的前端项目都要哪些文件
* 又要怎么打包发布到npm上  
* 你的es6语法如何才能让别人识别  
* readme应该如何编写  
* 如何添加eslint
* 怎么才能打包一个umd格式文件让html直接引用

## Usage

#### 直接在页面引用

```html
<script src="js/your-js-lib.min.js"></script>
```


#### Or install using npm 

``` 
npm install your-js-lib --save
... 

import YourJsLib from 'your-js-lib';
```

#### 使用:

```javascript
...
```

## Build
Node is a dependency, use terminal to install it with with:  

### 打包

```javascript
npm install
npm run build
``` 

### es6 lint

```javascript
npm run lint
```

## License
LicenseFinder is released under the MIT License. http://www.opensource.org/licenses/mit-license

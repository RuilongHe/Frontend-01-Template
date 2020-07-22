### SFC(Single-File Component, 单文件组件)

#### 模板
+ 每个 .vue 文件最多包含一个 ```<template>``` 块。
+ 内容将被提取并传递给 vue-template-compiler 为字符串，预处理为 JavaScript 渲染函数，并最终注入到从 ```<script>``` 导出的组件中。

#### 脚本
+ 每个 .vue 文件最多包含一个 ```<script>``` 块。

+ 这个脚本会作为一个 ES Module 来执行。

+ 它的默认导出应该是一个 Vue.js 的组件选项对象。也可以导出由 Vue.extend() 创建的扩展对象，但是普通对象是更好的选择。

+ 任何匹配 .js 文件 (或通过它的 lang 特性指定的扩展名) 的 webpack 规则都将会运用到这个 ```<script>``` 块的内容中。

#### 样式
+ 默认匹配：/\.css$/。
+ 一个 .vue 文件可以包含多个 ```<style>``` 标签；
+ 可以使用scope和module进行封装；
+ 具有不同封装模式的多个 ```<style>``` 标签可以在同一个组件中混合使用；

#### 自定义块
+ vue-loader 将会使用块名来查找对应的 loader 进行处理，需要配置webpack.config

#### src导入
src 导入遵循和 webpack 模块请求相同的路径解析规则，这意味着:
+ 相对路径需要以 ./ 开始
+ 你可以从 NPM 依赖中导入资源
```
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

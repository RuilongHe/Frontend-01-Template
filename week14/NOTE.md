### 组件化

#### 搭建环境
1. 创建项目文件夹
```
mkdir demo
cd demo
```
2. 安装依赖环境
```
npm init
npm install @babel/core --save-dev
npm install @babel/plugin-transform-react-jsx --save-dev
npm install @babel/preset-env --save-dev
npm install babel-loader --save-dev
npm install webpack --save-dev
npm install webpack-cli --save-dev
npm install webpack-dev-server --save-dev
```

#### 配置webpack
1. 为了使用jsx语法，需要对webpack做如下配置
```
module.exports = {
    entry: './main.js',
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'createElement'}]]
                }
            }
        }]
    },
    mode: 'development',
    optimization: {
        minimize: false
    }
};
```
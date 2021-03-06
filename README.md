# react-cli-singlepage
![license](https://img.shields.io/badge/license-MIT-blue.svg) ![webpack](https://img.shields.io/badge/webpack-4.32.0-orange.svg) ![eslint](https://img.shields.io/badge/Eslint-standard-lightgrey.svg)

> 基于 Webpack 的 React 单页脚手架工具
### 功能特点
- CSS文件单独打包
- DllPlugin 使用动态链接库引入React。
- HappyPack 多线程打包，提升打包速度。
- 支持Sass。
- 支持对React的热模块更替。
- 对图片的压缩优化。

#### 项目目录
```
my-app
├── README.md
├── node_modules
├── postcss.config.js postcss 配置文件
├── .eslinttrc.js eslint 配置文件
├── .babelrc babel 配置文件
├── package.json
├── .gitignore 
├── public 公共资源文件
├── config 配置文件
├── static 静态资源
└── src  项目源码
    ├── assets 存放资源
    ├── components 存放公共组件
    ├── utils 存放公用函数方法
    └── pages 存放页面级组件
```



#### 如何使用？

- 第一步，克隆本仓库到本地。

```
git clone 仓库地址
```

- 第二步 安装项目依赖

```
npm install
```

- 第三步 初始化项目

```
npm run init
```

- 第四步 手动修改 `package.json` 内相关配置

- 第五步 与远程仓库建立连接

```
git remote add origin 你的仓库地址
```

- 第六步 开始搭建自己的项目

```
// 打包生产环境代码
npm run build  
// 开发环境
npm run dev
// 未添加新第三方库的重新打包
npm run build:no-dll
```

## License
    
MIT License Copyright (c) 2019 [MIS Lab](https://github.com/mis-lab)

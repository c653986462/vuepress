---
title: 介绍
description: ''
position: 1
category: ''
fullscreen: true
menuTitle: 'Introduction'
---


<alert>

欢迎来到识度科技前端文档库，这里包含了最新的前端文档，涵盖前端大部分的内容，在使用组件、工具类、或者启动对应项目前，请务必仔细阅读该文档的对应内容，确认无误后协同项目内部的 `README.md` 文档一道使用对应内容。



文档的完善离不开大家的支持，如发现本文档有错误，欢迎联系指正。



我们的愿望是(~~上班摸鱼~~) **拳打后端，脚踏产品**~，做最帅的前端切图仔！

</alert>

> 写作手册，组件文档详情查看 [Nuxt-content](https://content.nuxtjs.org/) 文档

## 目录结构

所有的文档都放在 `/content/en` 目录下，静态资源位于 `/static` 目录下

## 新建文档

在 `/content/en` 目录下新建一个 `.md` 文档，书写头部声明，头部声明的格式是 `yml` 格式，可以添加自定义参数

```yml
---
title: 文档说明 # 标题
description: '文档说明' # 描述
position: 1 # 排序
category: 'Introduction' # 所属目录归类
menuTitle: '说明' # 左侧目录标题
version: 1.0 # 版本号
fullscreen: true # 是否全屏（默认false）
---

```

- 自定义参数

```yml
---
title: '识度科技平台聚合'
description: '平台聚合说明文档'
position: 1
category: '平台聚合'
version: 1.0
menuTitle: '平台聚合'
idmethods:
  - 声明字符串：组件文件所在路径（只到`git`仓库层，用`/`分割）
  - 算`md5`值取 32 位值，并对 32 位`md5`值进行大写转换，举例如下
---

```
上述的 `idmethods` 即为自定义参数，可以在自定义组件中使用

> 在新建文档声明上述必要的头部声明后，框架会自动解析目录结构，不需要额外操作

## 安装

> 需要 `Nodejs` 环境

```shell
git clone <git仓库地址>

cd <项目目录>

npm i # 安装依赖

npm run dev # 本地运行项目，写作前务必执行，执行后，可以打开本地浏览器 localhost:7000 进行实时预览查看
```

## 写作

> 书写 `markdown` 文档即可，支持绝大部分格式。（表现可能为不太一致，解析器不同）

- 可以使用 `vscode` 实时预览书写的 md 文档。然后打开浏览器查看实时渲染结果

## 部署

> 使用 `Docker` 部署，`jenkins` 已经配置完毕，任务为 `dev_frontend_document`

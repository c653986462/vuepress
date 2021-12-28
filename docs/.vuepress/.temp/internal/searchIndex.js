export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/config.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "介绍",
    "headers": [
      {
        "level": 2,
        "title": "目录结构",
        "slug": "目录结构",
        "children": []
      },
      {
        "level": 2,
        "title": "新建文档",
        "slug": "新建文档",
        "children": []
      },
      {
        "level": 2,
        "title": "安装",
        "slug": "安装",
        "children": []
      },
      {
        "level": 2,
        "title": "写作",
        "slug": "写作",
        "children": []
      },
      {
        "level": 2,
        "title": "部署",
        "slug": "部署",
        "children": []
      }
    ],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CI/CD之容器化",
    "headers": [
      {
        "level": 2,
        "title": "发布模式",
        "slug": "发布模式",
        "children": []
      },
      {
        "level": 2,
        "title": "Docker 入门",
        "slug": "docker-入门",
        "children": []
      },
      {
        "level": 2,
        "title": "Docker 安装",
        "slug": "docker-安装",
        "children": []
      },
      {
        "level": 2,
        "title": "Docker 常用命令",
        "slug": "docker-常用命令",
        "children": []
      },
      {
        "level": 2,
        "title": "Dockerfile",
        "slug": "dockerfile",
        "children": []
      },
      {
        "level": 2,
        "title": "Docker进阶",
        "slug": "docker进阶",
        "children": []
      }
    ],
    "path": "/page1/page11.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "eva-call 音视频组件",
    "headers": [
      {
        "level": 2,
        "title": "属性",
        "slug": "属性",
        "children": []
      },
      {
        "level": 2,
        "title": "回调",
        "slug": "回调",
        "children": []
      },
      {
        "level": 2,
        "title": "方法",
        "slug": "方法",
        "children": []
      },
      {
        "level": 2,
        "title": "插槽",
        "slug": "插槽",
        "children": []
      }
    ],
    "path": "/page1/page2.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}

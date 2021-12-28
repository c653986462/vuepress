export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "介绍",
  "lang": "en-US",
  "frontmatter": {
    "title": "介绍",
    "description": "",
    "position": 1,
    "category": "",
    "fullscreen": true,
    "menuTitle": "Introduction"
  },
  "excerpt": "",
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
  "git": {},
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

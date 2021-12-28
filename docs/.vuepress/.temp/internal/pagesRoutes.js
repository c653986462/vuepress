import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"介绍"},["/index.html","/README.md"]],
  ["v-7e75d464","/page1/page11.html",{"title":"CI/CD之容器化"},["/page1/page11","/page1/page11.md"]],
  ["v-78ae2e48","/page1/page2.html",{"title":"eva-call 音视频组件"},["/page1/page2","/page1/page2.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)

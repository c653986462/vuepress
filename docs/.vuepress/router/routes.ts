// 右上角router配置
export default [
  {
    text: '介绍',
    link: '/',
  },
  {
    text: '组件库',
    children: [
      {
        text: '组件',
        children: [
          {
            text: '组件1',
            link: '/page1/page11',
          },
          {
            text: '组件2',
            link: '/page1/page2',
          },
        ],
      },
    ],
  },
  // {
  //   text: 'page2',
  //   link: '/page2',
  // },
]

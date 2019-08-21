module.exports = {
  base: "/golang/",
  title: "Golang・1小时指南",
  description: "每天1小时，从零开始学习Go",
  head: [["link", { rel: "icon", type: "image/png", href: "/favicon.ico" }]],
  themeConfig: {
    repo: "1-hour/golang",
    repoLabel: "在GitHub上编辑",
    editLinkText: "在GitHub上编辑此页",
    editLinks: true,
    sidebar: [
      {
        title: "关于",
        collapsable: false,
        children: [
          "/about/",
        ]
      },
      {
        title: "入门指南",
        collapsable: false,
        children: [
          "/guide/",
          "/guide/getting-started-with-go/"
        ]
      },
      {
        title: "高级教程",
        collapsable: false,
        children: [
            "/effictive/",
        ]
      },
      {
        title: "项目实战",
        collapsable: false,
        children: [
            "/real-world/"
        ]
      }
    ]
  }
};

import { defineConfig } from "vitepress";
import fs from "fs";
import path from "path";
// 解释数学公式的插件
import mathjax3 from "markdown-it-mathjax3";
// 生成目录的插件
import aotoSidebar from "vitepressautosidebar";
// 解释任务列表的插件
import mdTaskLists from "markdown-it-task-lists";

// RSS插件
import { RssPlugin } from "vitepress-plugin-rss";
const baseUrl = "http://localhost:4173";
const RSS = {
  title: "Ty-Lyric",
  baseUrl,
  copyright: "Copyright (c) 2022-present, Ty-Lyric",
};
// 生成配置文件，使用方式见：https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Ty-Lyric",
  description: "（网站介绍）",
//   head: [["script", { src: "/node_modules/vextab/dist/div.dev.js" }]],
  themeConfig: {
    // 上端导航栏，使用方式见：https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    // 生成侧边栏
    sidebar: [
      { text: "README", link: "/README" },
      ...aotoSidebar(
        path.join(__dirname, "../docs"),
        path.join(__dirname, "../")
      ),
    ],
    // 显示搜索栏
    search: {
      provider: "local",
    },
    // 显示最后更新时间
    lastUpdated: {
      text: "最后更新时间",
    },
    // 页脚
    footer: {
      message: "转载请注明出处",
      copyright: `Copyright © 2022  
  <a href="http://truraly.fun">田园幻想乡</a>
  <a href="https://beian.miit.gov.cn/">浙ICP备2021038778号-1</a>`,
    },
    // 社交链接，如果禁用请同时禁用RSS插件
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  // 打包输出目录
  outDir: "./dist",
  // markdown解析器配置
  markdown: {
    config: (md) => {
      // 处理LaTeX公式
      md.use(mathjax3);
      // 处理任务列表
      md.use(mdTaskLists);
    },
  },
  // vue配置
  vue: {
    template: {
      compilerOptions: {
        // 处理自定义元素
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  // 插件
  vite: {
    // RSS插件
    plugins: [RssPlugin(RSS)],
  },
});

// 自定义元素, 用于处理数学公式
const customElements = [
  "math",
  "maction",
  "maligngroup",
  "malignmark",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mi",
  "mlongdiv",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mscarries",
  "mscarry",
  "mscarries",
  "msgroup",
  "mstack",
  "mlongdiv",
  "msline",
  "mstack",
  "mspace",
  "msqrt",
  "msrow",
  "mstack",
  "mstack",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "semantics",
  "math",
  "mi",
  "mn",
  "mo",
  "ms",
  "mspace",
  "mtext",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "msqrt",
  "mstyle",
  "mmultiscripts",
  "mover",
  "mprescripts",
  "msub",
  "msubsup",
  "msup",
  "munder",
  "munderover",
  "none",
  "maligngroup",
  "malignmark",
  "mtable",
  "mtd",
  "mtr",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "msline",
  "msrow",
  "mstack",
  "maction",
  "semantics",
  "annotation",
  "annotation-xml",
  "mjx-container",
  "mjx-assistive-mml",
];

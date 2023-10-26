// 用于创建博客的脚本
const process = require("process");
const fs = require("fs");
const path = require("path");
// 获取当前时间
const date = new Date();
// 获取命令行参数
const argv = process.argv;
console.log(argv);
let arr = new Array(...argv);
// console.log(arr)
arr.shift();
// console.log(arr)
arr.shift();
// console.log(arr)
if (arr.length == 0) {
  console.log("没有输入参数（博客标题）");
  process.exit(1);
} else {
  // 获取博客标题
  let title = arr[0];
  // 获取博客tags
  let tags = arr.slice(1);
  // 获取博客创建时间
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  // 获取博客创建时间字符串
  let dateStr = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

  // 合成博客内容
  let content = `---
title: ${title.replace(/^\d\./, "")}
date: ${dateStr}
outline: deep
tags:
${tags.map((tag) => `- ${tag}`).join("\n")}
---
# ${title.replace(/^\d\./, "")}
\`\`\`yml
\`\`\`
`;
  // 创建博客文件
  let blogPath = path.join(__dirname, `../docs/${title}.md`);
  fs.writeFile(blogPath, content, (err) => {
    if (err) {
      console.log("创建博客失败");
      process.exit(1);
    } else {
      console.log("创建博客成功");
    }
  });
}

// 开头
// ---
// title: TypeScript 被高估了
// date: 2023-03-27 20:29:25
// tags:
// - javaScript
// - TypeScript
// - 翻译转载
// ---

// > 2023-03-27 20:29

// 结尾
// Copyright © 2022 [田园幻想乡](/)[浙ICP备2021038778号-1](https://beian.miit.gov.cn/)

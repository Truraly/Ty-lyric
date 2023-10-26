#!/usr/bin/env node

// 获取当前目录下sidebar.json
const fs = require("fs");
// 获取执行路径
let path = process.cwd();
console.log(path);
// 获取当前目录下的所有文件名
let files = fs.readdirSync("./");

let config = {
  tital: "",
  collapsed: true,
  arrange: files
    .filter((file) => {
      return !file.startsWith(".");
    })
    .map((file) => {
      return file.replace(".md", "");
    }),
};

// 如果当前目录下没有sidebar.json则创建
if (!files.includes(path + "/sidebar.json")) {
  fs.writeFileSync(path + "/sidebar.json", JSON.stringify(config));
} else {
  console.log("sidebar.json已存在,请手动修改");
}

console.log(config);

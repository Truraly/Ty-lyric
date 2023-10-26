<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;

// 将时间字符串转为YYYY/M/D HH/mm格式
function formatDate(date) {
  if (!date) return "未知时间";
  const d = new Date(date);
  // -8时区
  d.setSeconds(d.getSeconds() - 8 * 60 * 60);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const hour = d.getHours();
  const minute = d.getMinutes();
  return `${year}/${num2str(month)}/${num2str(day)} ${num2str(hour)}:${num2str(
    minute
  )}`;
}

// num to str
function num2str(num) {
  return num < 10 ? "0" + num : num;
}

// get authors
function getauthors(author) {
  if (!author) return "未知";
  else if (typeof author == "string") return author;
  else if (Array.isArray(author)) return author.join("、");
  else return "未知";
}

// get tags
function gettags(tags) {
  if (!tags) return "未知";
  else if (typeof tags == "string") return "#" + tags;
  else if (Array.isArray(tags)) {
    tags = tags.map((tag) => "#" + tag);
    return tags.join(" ");
  } else return "未知";
}
</script>

<!-- doc-top
doc-bottom
doc-footer-before
doc-before
doc-after -->

<template>
  <Layout>
    <!-- <template #doc-top> -->
    <!-- <b>#doc-top</b> -->
    <!-- <div id="boo"></div> -->
    <!-- </template> -->
    <!-- <template #doc-before> -->
    <!-- <b>#doc-before</b> -->
    <!-- <h1>emm</h1> -->
    <!-- </template> -->
    <!-- <template #doc-after> -->
    <!-- <b>#doc-after</b> -->
    <!-- </template> -->
    <!-- 在底部添加网站说明 -->
    <template #doc-bottom>
      <hr />
      <p>
        Copyright © 2022
        <a href="http://truraly.fun">田园幻想乡</a>
        <a href="https://beian.miit.gov.cn/">浙ICP备2021038778号-1</a>
      </p>
    </template>
    <!-- 在文章结尾添加第一次上传时间 -->
    <template #doc-footer-before>
      <p v-if="$frontmatter.author != undefined">
        贡献者：
        {{ getauthors($frontmatter.author) }}
      </p>
      <p v-if="$frontmatter.date != undefined">
        发布时间:
        <!-- YYYY/M/D HH/mm -->
        <time>{{ formatDate($frontmatter.date) }}</time>
      </p>
      <p v-if="$frontmatter.tags != undefined">
        标签:
        {{ gettags($frontmatter.tags) }}
      </p>

      <!-- 最后修改时间 -->
    </template>
  </Layout>
</template>

<style scoped>
/* 文章底部信息的格式 */
p {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

h1 {
  font-size: 24px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>

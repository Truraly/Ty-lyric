<script lang="ts" setup>
console.log("alphaTab");
import { defineProps } from "vue";
const props = defineProps(["foo"]);
import { AlphaTabApi } from "../packages/alphaTab/alphaTab";
console.log(props.foo);

let cl = setInterval(() => {
  const element = document.getElementById("alphaTab");
  if (element) {
    clearInterval(cl);
    const api = new AlphaTabApi(element as HTMLElement, {});
  }
}, 500);
</script>
<template>
  <div id="alphaTab" data-tex="true" v-html="$props.foo"></div>
</template>

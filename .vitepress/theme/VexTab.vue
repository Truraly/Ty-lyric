<script setup>
console.log("alphaTab");
import { defineProps, ref } from "vue";
const props = defineProps(["foo"]);
// import { VexTab, Artist, Vex } from "vextab";
// console.log(props.foo);
// const Renderer = Vex.Flow.Renderer;

let cl = setInterval(() => {
  if (global.document == undefined) return clearInterval(cl);
  const element = document.getElementById("boo");
  if (element) {
    clearInterval(cl);
    element.innerHTML = props.foo;
    pri();
  }
}, 300);

function pri() {
  // 导入/node_modules/vextab/dist/div.dev.js
  let sc = document.createElement("script");
  sc.src = "/node_modules/vextab/dist/div.dev.js";
  document.head.appendChild(sc);
}
</script>
<template>
  <!-- <div id="boo" v-html="$props.foo"></div> -->
  <div
    id="boo"
    class="vextab-auto"
    width="680"
    scale="1.0"
    editor="true"
    editor-width="680"
    editor-height="330"
  >
    <!-- {{ $props.foo }} -->
  </div>
</template>

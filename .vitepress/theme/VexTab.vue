<script setup>
console.log("alphaTab");
import { defineProps } from "vue";
const props = defineProps(["foo"]);
// import { VexTab, Artist, Vex } from "vextab";
// console.log(props.foo);
// const Renderer = Vex.Flow.Renderer;

// let cl = setInterval(() => {
//   const element = document.getElementById("boo");
//   if (element) {
//     // Create VexFlow Renderer from canvas element with id #boo
//     const renderer = new Renderer($("#boo")[0], Renderer.Backends.SVG);
//     // Initialize VexTab artist and parser.
//     const artist = new Artist(10, 10, 600, { scale: 0.8 });
//     const tab = new VexTab(artist);
//     try {
//       tab.parse("tabstave").val();
//       artist.render(renderer);
//     } catch (e) {
//       console.error(e);
//     }
//   }
// }, 500);
</script>
<template>
  <!-- <div id="boo" v-html="$props.foo"></div> -->
  <div
    class="vextab-auto"
    width="680"
    scale="1.0"
    editor="true"
    editor-width="680"
    editor-height="330"
  >
    {{ $props.foo }}
  </div>
</template>

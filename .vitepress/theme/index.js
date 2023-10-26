// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import MyLayout from "./MyLayout.vue";
// import gc from "./gc.vue";
import VexTab from "./VexTab.vue";
// import "./index.css";

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    // ctx.app.component("gc", gc);
    ctx.app.component("VexTab", VexTab);
  },
};

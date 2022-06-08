import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { visualizer } from "rollup-plugin-visualizer";
// import VueI18n from "@intlify/vite-plugin-vue-i18n";
import removeConsole from "vite-plugin-remove-console";

export function getPluginsList(viteEnv, command) {
  // const prodMock = true;

  const { VITE_DROP_CONSOLE, VITE_LEGACY } = viteEnv;

  return [
    vue(),
    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    // VueI18n({
    //   runtimeOnly: true,
    //   compositionOnly: true,
    //   include: [resolve("locales/**")]
    // }),
    // jsx、tsx语法支持
    vueJsx(),
    // 删除console
    VITE_DROP_CONSOLE ? removeConsole() : null,
    // viteBuildInfo(),
    // 自定义主题
    // svg组件化支持
    // svgLoader(),
    // 是否为打包后的文件提供传统浏览器兼容性支持
    VITE_LEGACY
      ? legacy({
          targets: ["ie >= 11"],
          additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        })
      : null,
    // 打包分析
    command === "report"
      ? visualizer({ open: true, brotliSize: true, filename: "report.html" })
      : null,
  ];
}

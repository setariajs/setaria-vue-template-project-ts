// import path from 'path';
import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import babel from 'vite-plugin-babel';
// import svgLoader from 'vite-svg-loader';
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'
import DefineOptions from 'unplugin-vue-define-options/vite'
export default defineConfig({
  // resolve: {
  //   alias: [{ find: '@devui', replacement: path.resolve(__dirname, '../devui') }],
  // },
  plugins: [vueJsx({}),MarkdownTransform(),DefineOptions()],
  // optimizeDeps: {
  //   exclude: ['lodash-es', 'mitt', 'async-validator', 'css-vars-ponyfill', 'rxjs', '@vueuse/core', '@floating-ui/dom', 'vue-router'],
  // },
  // server: {
  //   fs: {
  //     strict: false,
  //   },
  // },
});

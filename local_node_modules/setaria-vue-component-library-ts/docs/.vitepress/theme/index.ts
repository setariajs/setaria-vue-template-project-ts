import Theme from 'vitepress/dist/client/theme-default'
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import Components from '../../../packages/components'
import { registerComponents } from './register-components'
// import 'vitepress-theme-demoblock/theme/styles/index.css'
// import VPApp from '../components/'

export default {
  ...Theme,
  // Layout: VPApp,
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.use(Components);
    registerComponents(app);
  }
}




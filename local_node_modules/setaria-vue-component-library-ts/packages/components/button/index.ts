import type { App } from 'vue';
//@ts-ignore
import Button from './src/button.vue';
// import { withInstall } from '../../utils/install'

export * from './src/button-types';
export { Button };

export default {
  install(app: App): void {
    console.log('bingog')
    app.component(Button.name, Button);
  },
}







// import Button from './src/button.vue';

// export const ElButton = withInstall(Button)
// export default ElButton

// export * from './src/card'

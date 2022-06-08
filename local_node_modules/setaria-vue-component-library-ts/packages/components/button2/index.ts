import type { App } from 'vue';

import Button2 from './src/button';

export * from './src/button-types';

export { Button2 };

export default {
  install(app: App): void {
    app.component(Button2.name, Button2);
  },
};

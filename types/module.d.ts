declare module "*.vue" {
  import { DefineComponent } from "vue";
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

declare module "*.scss" {
  const scss: Record<string, string>;
  export default scss;
}

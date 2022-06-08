declare global {
  const process: {
    env: { NODE_ENV: string }
  }

  namespace JSX {
    interface IntrinsicAttributes {
      class?: any
      style?: any
    }
  }
  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
    //   env: any;
  }

}


declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Component: (props: { is: Component | string }) => void
  }
}

export { }

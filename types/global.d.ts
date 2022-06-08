import type {
  ComponentRenderProxy,
  VNode,
  // VNodeChild,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType,
} from "vue";
// GlobalComponents for Volar
// declare module "vue" {
//   export interface GlobalComponents {
//     IconifyIconOffline: typeof import("../src/components/ReIcon")["IconifyIconOffline"]
//     IconifyIconOnline: typeof import("../src/components/ReIcon")["IconifyIconOnline"]
//     FontIcon: typeof import("../src/components/ReIcon")["FontIcon"]
//   }
// }

declare global {
  // const __APP_INFO__: {
  //   pkg: {
  //     name: string
  //     version: string
  //     dependencies: Recordable<string>
  //     devDependencies: Recordable<string>
  //   }
  //   lastBuildTime: string
  // }
  interface Window {
    // Global vue app instance
    // __APP__: App<Element>
    webkitCancelAnimationFrame: (handle: number) => void;
    mozCancelAnimationFrame: (handle: number) => void;
    oCancelAnimationFrame: (handle: number) => void;
    msCancelAnimationFrame: (handle: number) => void;
    webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    mozRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    oRequestAnimationFrame: (callback: FrameRequestCallback) => number;
    msRequestAnimationFrame: (callback: FrameRequestCallback) => number;
  }

  // vue
  type PropType<T> = VuePropType<T>;

  type Writable<T> = {
    -readonly [P in keyof T]: T[P];
  };

  type Nullable<T> = T | null;
  // type NonNullable<T> = T extends null | undefined ? never : T;
  type Recordable<T = any> = Record<string, T>;
  type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };
  type Indexable<T = any> = {
    [key: string]: T;
  };
  type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };
  type TimeoutHandle = ReturnType<typeof setTimeout>;
  type IntervalHandle = ReturnType<typeof setInterval>;

  interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }

  interface WheelEvent {
    path?: EventTarget[];
  }
  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
    //   env: any;
  }

  interface GlobOptions {
    as?: string;
    /**
     * @deprecated
     */
    assert?: {
      type: string;
    };
  }

  // interface ImportMeta {
  //   readonly env: ViteEnv;
  //   glob<Module = { [key: string]: any }>(
  //     pattern: string,
  //     options?: GlobOptions,
  //   ): Record<string, () => Promise<Module>>;

  //   globEager<Module = { [key: string]: any }>(
  //     pattern: string,
  //     options?: GlobOptions,
  //   ): Record<string, Module>;
  // }

  interface ViteEnv {
    VITE_PORT: number;
    VITE_PUBLIC_PATH: string;
    VITE_LEGACY: boolean;
    VITE_ROUTER_HISTORY: string;
    VITE_APP_SSO_BASE_URL: string;
    VITE_APP_SITE_ID: string;
  }

  function parseInt(s: string | number, radix?: number): number;

  function parseFloat(string: string | number): number;

  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
    type ElementClass = ComponentRenderProxy;
    interface ElementAttributesProperty {
      $props: {};
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface IntrinsicAttributes {
      [elem: string]: any;
    }
  }
}

declare module "vue" {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}

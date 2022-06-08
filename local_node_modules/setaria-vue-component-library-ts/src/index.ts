import { Setaria, } from '@setaria/setaria-ts'
import { setupUI } from './ui/'
import { injectConfig } from './injection'
import { setEnvParams } from '@/utils/envParams'

import type { FrameworkConfig, ViteEnv } from '@setaria/setaria-ts'




export class Framework extends Setaria {

  constructor(config: FrameworkConfig, envParmas: ViteEnv) {
    // 注入常量内容
    setEnvParams(envParmas);
    // 注入配置内容
    injectConfig(config);
    super(config, envParmas);
    setupUI(this.app);
  }

}


export * from './store/'



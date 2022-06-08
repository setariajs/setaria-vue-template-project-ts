
import type { FrameworkConfig, } from '@setaria/setaria-ts'
import { http } from '../http'
import { errorHandler } from '../error'

export const injectConfig = (config: FrameworkConfig) => {

    config.http = (config.http ?? []).concat(http)

    config.errorHandler = errorHandler


}
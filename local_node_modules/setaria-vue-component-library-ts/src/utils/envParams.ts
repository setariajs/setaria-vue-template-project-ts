import type { ViteEnv } from '@setaria/setaria-ts'

let envParams: ViteEnv



export const setEnvParams = (env: ViteEnv) => {
    envParams = env
}

export const getEnvParams = () => {
    return envParams
}
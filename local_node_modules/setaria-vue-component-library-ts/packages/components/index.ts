import type { App } from 'vue'
import ButtonInstall, { Button } from './button'
import ButtonInstall2, { Button2 } from './button2'

const installs = [
    ButtonInstall,
    ButtonInstall2,
]

export {
    Button,
    Button2
} 


export default {
    install(app: App): void {
        installs.forEach((p) => app.use(p as any))
    }
}

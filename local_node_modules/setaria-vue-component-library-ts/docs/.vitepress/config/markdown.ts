import mdContainer from 'markdown-it-container'
import MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'
import fs from 'fs'
import path from 'path'
import { highlight } from '../utils/highlight'

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ): string
}


const localMd = MarkdownIt()


const markdown = {
  config: (md) => {
    md.use(mdContainer, 'demo', {
      validate(params) {
        return !!params.trim().match(/^demo\s*(.*)$/)
      },

      render(tokens, idx) {
        // console.log(tokens)
        const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
        if (tokens[idx].nesting === 1 /* means the tag is opening */) {
          const description = m && m.length > 1 ? m[1] : ''
          const sourceFileToken = tokens[idx + 2]
          let source = ''
          const children =   sourceFileToken.children

          let sourceFile = ''



          if(children && children.length ){
            sourceFile = children[0].content
          }


          if (sourceFileToken.type === 'inline') {
            source = fs.readFileSync(
              path.resolve('.', 'docs/components', `${sourceFile}.vue`),
              'utf-8'
            )
          }

          const filePath = sourceFile.split('/')[1]


          if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
          // console.log('source:',source)
          return `
          <Demo :demos="demos" source="${encodeURIComponent(
            highlight(source, 'vue')
          )}" path="${filePath}" raw-source="${encodeURIComponent(
            source
          )}" description="${encodeURIComponent(localMd.render(description))}">`
        } else {
          return '</Demo>'
        }
      },
    } as ContainerOpts)
  }
}
export default markdown




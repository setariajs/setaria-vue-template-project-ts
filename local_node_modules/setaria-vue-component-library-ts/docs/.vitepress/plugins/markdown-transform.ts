import path from 'path'

import type { Plugin } from 'vite'


type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>

export function MarkdownTransform(): Plugin {
  return {
    name: 'element-plus-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return

      const pathList = path.dirname(id).split(path.posix.sep)
      const componentId = pathList[pathList.length - 1]// path.basename(id, '.md')

      const append: Append = {
        headers: [],
        footers: [],
        scriptSetups: [
          `const demos =  import.meta.globEager('./*.vue')
          `,
        ],
      }


      code = transformVpScriptSetup(code, append)

      const res = combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers],
        append.footers
      )
      return res
    },
  }
}

const combineScriptSetup = (codes: string[]) =>
  `\n<script setup>
${codes.join('\n')}
</script>
`

const combineMarkdown = (
  code: string,
  headers: string[],
  footers: string[]
) => {
  const frontmatterEnds = code.indexOf('---\n\n') + 4
  const firstSubheader = code.search(/\n## \w/)
  const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader

  if (headers.length > 0)
    code =
      code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
  code += footers.join('\n')

  return `${code}\n`
}

const vpScriptSetupRE = /<vp-script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/vp-script>/

const transformVpScriptSetup = (code: string, append: Append) => {
  const matches = code.match(vpScriptSetupRE)
  if (matches) code = code.replace(matches[0], '')
  let scriptSetup = ''
  if (matches && matches.length) {
    scriptSetup = matches[3]
  }
  if (scriptSetup) append.scriptSetups.push(scriptSetup)
  return code
}


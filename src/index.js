const fileRegex = new RegExp("\.(vue)$")

export default function vitePluginVueAutoName() {
  return {
    name: 'vite-plugin-vue-auto-name',
    
    transform(src, id) {
      let code = src
      if (fileRegex.test(id)) {
        const name = id.split('/').at(-1).split('.')[0]
        code = code.replace(
          /const _sfc_main = \/\* @__PURE__ \*\/ _defineComponent\({/, 
          `const _sfc_main = /* @__PURE__ */ _defineComponent({
  name: "${name}",`)
        const regex = new RegExp('const _sfc_main = {}')

        const matches = regex.exec(code)
        if(matches) {
          code = code.replace(regex, `const _sfc_main = { name: "${name}" }`)
        }
      }
      return {
        code,
        map: null,
      }
    },
  }
}

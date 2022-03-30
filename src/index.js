const fileRegex = /\.(vue)$/

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
      }
      return {
        code,
        map: null,
      }
    },
  }
}

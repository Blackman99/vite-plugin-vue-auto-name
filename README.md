## Background

Solve the name property missing after build
When using this, you don't need to provide the name property manually anymore

for example `/foo/bar/YourComponent.vue`: 

```vue
<script setup>
// ... some scripts
</script>
<template>
  // ... some dom
</template>
```

will be bundled into something like this:

```js
const _sfc_main = /* @__PURE__ */ _defineComponent({
  name: "YourComponent",
  // ... Your code
})
```

## Install

```
npm install -D vite-plugin-vue-auto-name
yarn add -D vite-plugin-vue-auto-name
pnpm add -D vite-plugin-vue-auto-name
```

## Usage

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginVueAutoName from 'vite-plugin-vue-auto-name'

export default defineConfig({
  plugins: [
    vue(), 
    vitePluginVueAutoName(),
    // ...other plugins
  ]
})
```


# X Library Import Resolver

English | [简体中文](./README.zh-CN.md)

## Automatic Import

This folder includes a resolver for [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) that enables on-demand importing of X Library components.

### Install Plugin

```shell
# npm
npm i unplugin-vue-components  -D

# yarn
yarn add unplugin-vue-components -D

# pnpm
pnpm add unplugin-vue-components -D
```

### Vite

```js
// vite.config.js
import vue from '@vitejs/plugin-vue';
import components from 'unplugin-vue-components/vite';
import { XLibraryVueResolver } from 'x-library/resolver';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vue(),
    components({
      resolvers: [XLibraryVueResolver()],
    }),
  ],
});
```

### Vue CLI

```js
// vue.config.js
const Components = require('unplugin-vue-components/webpack');
const { XLibraryVueResolver } = require('x-library/resolver');

module.exports = {
  configureWebpack: {
    plugins: [
      Components.default({
        resolvers: [XLibraryVueResolver()],
      }),
    ],
  },
};
```

### Auto import

```html
<script setup>
  // auto import equal to
  // import { Avatar } from 'x-library'
</script>

<template>
  <XLAvatar
    src="https://img2.baidu.com/it/u=3528052712,1832485987&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
  />
</template>
```

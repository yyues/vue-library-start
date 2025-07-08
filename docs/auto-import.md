---
title: 按需引入
---

# X Library Import Resolver

<!-- [English](./README.md) | 简体中文 -->

## 自动引入

此文件夹包含 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 的解析器，用于实现 X Library 按需引入。

### 安装插件

```shell
# npm
npm i unplugin-vue-components  -D

# yarn
yarn add unplugin-vue-components -D

# pnpm
pnpm add unplugin-vue-components -D
```

### Vite 使用方法

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

### Vue CLI 使用方法

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

### 自动引入效果

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

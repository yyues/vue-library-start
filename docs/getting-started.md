---
title: 快速开始
---

# 快速开始

## 安装

使用 npm 或 pnpm 安装：

```bash
git clone https://github.com/yyues/vue-library-start.git

# 移除仓库git
rm -rf .git
```

## 开发

```bash
mkdir src/avatar/index.tsx

```

## 构建

```bash
pnpm run build
```

## 引入组件

在 play 中更新依赖：

```bash
pnpm i
```

```ts
import { createApp } from 'vue';
import { Avatar } from 'vue-library-start';
import 'vue-library-start/dist/style.css';

const app = createApp(App);
app.component('Avatar', Avatar);
app.mount('#app');
```

## 基础使用

```vue
<template>
  <Avatar src="https://example.com/avatar.jpg" />
</template>
```

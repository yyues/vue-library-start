# Vue-library-start

[文档](https://yyues.github.io/vue-library-start/)

## 概述

本项目是一个基于 Vite 和 pnpm 等工具搭建的快速组件库开发架构。借助 Vite 的高效开发服务器和构建能力，以及 pnpm 的高效依赖管理，能帮助开发者快速搭建和开发 Vue 组件库。

## 技术栈

- **Vite**：现代前端构建工具，提供了快速的冷启动和热更新能力。
- **pnpm**：快速、节省磁盘空间的包管理器，相比 npm 和 yarn 能更高效地管理依赖。
- **Vue**：渐进式 JavaScript 框架，用于构建组件化的用户界面。

## 必须依赖

- **`pnpm`**： 比 npm 和 yarn 更高效的包管理工具。
- **`node >= 20`**： javascript 运行时环境。

## 安装步骤

```bash
# 克隆仓库
git clone https://github.com/yourusername/vue-library-start.git
cd vue-library-start

# 安装依赖
pnpm install
```

## 快速开始

### 引入组件

```javascript
// 全局引入
import { createApp } from 'vue';
import XLibrary from 'x-library';
import 'x-library/dist/style.css';

const app = createApp(App);
app.use(XLibrary);

// 按需引入
import { Avatar } from 'x-library';
```

### 使用示例

```vue
<template>
  <xAvatar src="https://example.com/avatar.jpg" alt="用户头像" />
</template>

<script setup>
import { Avatar as xAvatar } from 'x-library';
</script>
```

## 开发指南

### 启动开发环境

```bash
# 启动组件演示环境
pnpm play

# 启动文档站点
pnpm docs:dev
```

### 添加新组件

1. 在 `src/` 目录下创建新组件文件夹（如 `src/button`）
2. 添加组件实现文件 `index.tsx` 和类型定义 `interface.d.ts`
3. 在 `src/components.ts` 中导入新开发组件
4. 运行 `pnpm run build:watch`
5. 在 `play/src/App.vue` 中添加演示代码

## 构建与发布

### 构建组件库

```bash
# 构建所有格式 (ES Module, CommonJS, UMD)
pnpm build

# 监听文件变化，实时构建
pnpm build:watch
```

### 构建文档

```bash
pnpm docs:build
```

### 发布到 npm

```bash
# 确保已登录 npm
npm login

# 发布包
pnpm publish
```

## 代码质量

### 代码检查

```bash
# ESLint 检查
pnpm lint:eslint

# StyleLint 检查
pnpm lint:style

# 代码格式化
pnpm lint:format
```

### 类型检查

```bash
pnpm typecheck
```

## 项目结构

以下是项目的主要目录结构及各部分的作用：

- **`/play`**：用于演示组件的使用场景。
- **`/src`**：组件库的源代码目录。
  - **`/[component]`**：存放各个组件的源代码（如 `/avatar`）。
  - **`/_utils`**：存放工具函数的目录。
  - **`/components.ts`**：组件注册入口文件。
  - **`/index.ts`**：组件库打包入口。
- **`/docs`**：组件库的文档目录，使用 VitePress 构建。
- **`/resolver`**：解析器相关代码。
- **`/vite.config.mts`**：Vite 开发环境配置。
- **`/vite.config.dist.mts`**：组件库构建配置。

> **注意**：`/typings` 目录会在构建过程中自动生成，包含组件库的类型定义文件。

## 许可证

本项目采用 [MIT 许可证](LICENSE) 开源，详情请查看 LICENSE 文件。

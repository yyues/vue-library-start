<div align="center">

# Vue Library Start

**基于 Vite + pnpm 的 Vue 组件库快速开发脚手架**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node >= 20](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-%3E%3D9-orange)](https://pnpm.io/)
[![Vue 3](https://img.shields.io/badge/Vue-3-42b883)](https://vuejs.org/)

[📖 在线文档](https://yyues.github.io/vue-library-start/) · [🐛 问题反馈](https://github.com/yyues/vue-library-start/issues) · [🚀 GitHub](https://github.com/yyues/vue-library-start)

</div>

---

## 简介

**Vue Library Start** 是一个开箱即用的 Vue 3 组件库开发模板，集成了业界主流工具链，可用于：

- 从零开始构建自己的 Vue 组件库
- 对已有 UI 库（如 Ant Design Vue）进行二次封装

项目内置完整的构建、文档、代码规范和发布流程，让开发者专注于组件本身的实现。

## ✨ 特性

| 特性 | 说明 |
|------|------|
| ⚡ **Vite 驱动** | 极速冷启动，热更新即时响应 |
| 📦 **pnpm 管理** | 节省磁盘空间，依赖安装更高效 |
| 🎯 **多格式输出** | 同时支持 ESM、CJS、UMD 三种格式 |
| 📝 **TypeScript** | 全量类型支持，自动生成类型声明文件 |
| 🎨 **Less 预处理** | 内置 Less 样式支持，遵循 BEM 规范 |
| 📚 **VitePress 文档** | 内置文档站点，支持一键部署 |
| 🔍 **按需引入** | 提供 unplugin-vue-components Resolver |
| 🛡️ **代码规范** | 内置 ESLint、StyleLint、Prettier、Husky |

## 环境要求

- **Node.js** `>= 20`
- **pnpm** `>= 9`

## 快速开始

### 1. 克隆模板

```bash
git clone https://github.com/yyues/vue-library-start.git
cd vue-library-start

# 移除原仓库 Git 记录，初始化为你自己的项目
rm -rf .git
git init
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动开发环境

```bash
# 启动组件演示（play 目录）
pnpm play

# 启动文档站点
pnpm docs:dev
```

## 开发指南

### 添加新组件

以新建 `Button` 组件为例：

**① 创建组件目录**

```
src/
└── button/
    ├── interface.d.ts   # Props / Emits / Slots 类型定义
    ├── index.tsx        # 组件实现
    └── index.less       # 组件样式（可选）
```

**② 注册组件**

在 `src/components.ts` 中导出新组件：

```ts
export { Button } from './button';
```

**③ 实时预览**

```bash
# 监听文件变化，实时构建
pnpm build:watch
```

在 `play/src/App.vue` 中添加演示代码，即可在浏览器中实时预览效果。

### 组件开发规范

- **类型命名**：Props 用 `ButtonProps`，Emits 用 `ButtonEmits`，Slots 用 `ButtonSlots`
- **样式规范**：采用 Less 编写，遵循 BEM 命名规范，避免全局样式污染
- **目录规范**：每个组件独立目录，`interface.d.ts` 负责类型，`index.tsx` 负责实现

## 构建与发布

### 构建组件库

```bash
# 构建全部格式（ESM + CJS + UMD）
pnpm build

# 仅构建 UMD 格式（含样式）
pnpm build:dist

# 监听模式（开发阶段使用）
pnpm build:watch
```

构建产物目录：

| 目录 | 格式 | 说明 |
|------|------|------|
| `es/` | ESM | 支持 Tree-shaking |
| `lib/` | CJS | CommonJS 格式 |
| `dist/` | UMD | 浏览器直接引入 |
| `typings/` | `.d.ts` | 类型声明文件（构建自动生成） |

### 构建文档

```bash
pnpm docs:build
```

### 发布到 npm

```bash
# 确保已登录 npm 账号
npm login

# 发布（基于 publishConfig 配置）
pnpm publish
```

## 使用说明（发布后）

> 以下为组件库发布到 npm 后的使用方式，供参考。

### 全局引入

```ts
import { createApp } from 'vue';
import XLibrary from 'x-library';
import 'x-library/dist/style.css';

const app = createApp(App);
app.use(XLibrary);
app.mount('#app');
```

### 按需引入

```ts
import { Avatar } from 'x-library';
```

### 按需自动引入（推荐）

安装 `unplugin-vue-components`：

```bash
pnpm add unplugin-vue-components -D
```

配置 `vite.config.ts`：

```ts
import Components from 'unplugin-vue-components/vite';
import { XLibraryVueResolver } from 'x-library/resolver';

export default defineConfig({
  plugins: [
    Components({
      resolvers: [XLibraryVueResolver()],
    }),
  ],
});
```

在模板中直接使用，无需手动引入：

```vue
<template>
  <XLAvatar src="https://example.com/avatar.jpg" alt="用户头像" />
</template>
```

## 代码质量

```bash
# ESLint 检查并修复
pnpm lint:eslint

# StyleLint 检查并修复
pnpm lint:style

# Prettier 格式化
pnpm lint:format

# TypeScript 类型检查
pnpm typecheck
```

代码提交时会自动触发 lint-staged，对暂存文件执行相应检查。提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范。

## 项目结构

```
vue-library-start/
├── src/                    # 组件库源码
│   ├── [component]/        # 组件目录（如 avatar/）
│   │   ├── interface.d.ts  # 类型定义
│   │   ├── index.tsx       # 组件实现
│   │   └── index.less      # 组件样式
│   ├── _utils/             # 工具函数
│   ├── components.ts       # 组件注册入口
│   └── index.ts            # 组件库打包入口
├── play/                   # 组件演示应用
├── docs/                   # VitePress 文档站点
├── resolver/               # unplugin-vue-components 解析器
├── typings/                # 类型声明（构建自动生成）
├── vite.config.mts         # Vite ESM/CJS 构建配置
└── vite.config.dist.mts    # Vite UMD 构建配置
```

## 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。

---
title: UI库二次开发指南
outline: deep
---

# 组件二开规范（个人版）

1. **UI库不参与打包过程！！！**
2. 项目中有相同依赖的话组件库对应依赖应该不打包

**强调** 受限于项目中UI可能存在的重写、样式、主题覆盖。组件库UI一旦打包后会丢失样式（主题居多）。所以组件库是应当作为外部依赖的。

## 默认实现（ant-design-vue@3.2.0）

当前项目的实现是基于 `ant-design-vue@3.2.0`的版本实现的。

涉及内容

- `vite.config.mts` 作为 `externals`的外部依赖
- `src/avatar`中的使用

## 无UI实现

基于 `默认实现`的代码下

1. 移除 `ant-design-vue`依赖
2. 移除 `src/avatar`中涉及到 `ant-design-vue`的组件实现
3. 移除 `play`项目下的 `ant-design-vue`依赖
4. 移除 `vite.config.mts` 中的 `rollupOptions/globals`索引

## AntD-V4实现

基于 `默认实现`的代码下

1. 升级项目 `peerDependencies`中的 `ant-design-vue` 至最新版即可

## Element-plus实现

基于 `默认实现`的代码下

1. 全局替换 `ant-design-vue` 至 `element-ts`
2. 移除替换 `src/avatar`中两个UI库差异的参数和事件

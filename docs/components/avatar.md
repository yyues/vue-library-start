---
title: Avatar 头像
---

# Avatar 头像

用于用户头像展示，支持图片、图标或字符展示。

## 基本用法

```vue
<template>
  <Avatar src="https://example.com/user-avatar.jpg" alt="用户头像" />
</template>
```

## 尺寸大小

支持 `small`、`default`、`large` 三种预设尺寸，或自定义尺寸。

```vue
<template>
  <div class="avatar-group">
    <Avatar size="small" src="https://example.com/avatar1.jpg" />
    <Avatar size="default" src="https://example.com/avatar2.jpg" />
    <Avatar size="large" src="https://example.com/avatar3.jpg" />
    <Avatar :size="48" src="https://example.com/avatar4.jpg" />
  </div>
</template>
```

## 形状样式

支持圆形（默认）和方形两种形状。

```vue
<template>
  <div class="avatar-group">
    <Avatar shape="circle" src="https://example.com/avatar1.jpg" />
    <Avatar shape="square" src="https://example.com/avatar2.jpg" />
  </div>
</template>
```

## 图标头像

当没有图片时，可以使用图标作为头像。

```vue
<template>
  <Avatar icon="user" />
</template>
```

## 属性说明

| 属性名 | 类型                                      | 默认值    | 说明                           |
| ------ | ----------------------------------------- | --------- | ------------------------------ |
| src    | string \| (prefix?: string) => string     | -         | 图片地址，支持函数形式动态生成 |
| prefix | string                                    | -         | 图片地址前缀，用于拼接相对路径 |
| icon   | string \| Component                       | -         | 图标类型，支持组件或图标名称   |
| size   | 'small' \| 'default' \| 'large' \| number | 'default' | 头像尺寸                       |
| shape  | 'circle' \| 'square'                      | 'circle'  | 头像形状                       |
| alt    | string                                    | -         | 图片加载失败时的替代文本       |

## 继承属性

该组件继承了 Ant Design Vue Avatar 组件的所有属性和事件，详细信息请参考 [Ant Design Vue Avatar 文档](https://www.antdv.com/components/avatar-cn/)。

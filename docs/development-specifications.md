---
title: 开发规范
---

# 开发规范

在开发组件库时，遵守一定的规范可以使得代码具有良好的可阅读性和扩展性

## 组件目录结构

:每个组件应遵循以下目录结构：

```
src/
└── [组件名]/          # 组件目录，如 avatar/
    ├── interface.ts   # 类型定义文件，包含组件Props、事件等类型
    ├── index.ts       # 组件导出文件，对外暴露组件
    ├── index.vue      # 组件实现文件，包含模板、脚本和样式
    └── index.less     # 组件样式文件（可选）
```

### 文件说明

- **interface.ts**: 定义组件的Props、Emits、Slots等类型，确保类型安全
- **index.ts**: 统一导出组件，便于外部引用
- **index.vue**: 组件核心实现，包含模板、逻辑和样式引用
- **index.less**: 组件样式文件，采用less预处理器

## 示例（以Avatar组件为例）

```
src/
└── avatar/
    ├── interface.ts
    ├── index.ts
    ├── index.vue
    └── index.less
```

## Ts类型规范(以Avatar组件为例)

- 组件Props类型名(推荐)：AvatarProps
- 组件Emits类型名(推荐)：AvatarEmits
- 组件Slots类型名(推荐)：AvatarSlots

## 样式规范

- 组件样式文件：采用less预处理器编写样式，确保样式可复用和可维护
- 组件样式作用域：采用BEM规范编写样式，确保样式不会污染全局

### 示例

```less
// 定义组件变量
@avatar-size: 40px;
@avatar-font-size: 14px;
@avatar-border-radius: 50%;

// 使用变量
.avatar {
  width: @avatar-size;
  height: @avatar-size;
  font-size: @avatar-font-size;
  border-radius: @avatar-border-radius;
}
```

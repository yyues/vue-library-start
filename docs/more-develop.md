---
title: 拓展补充
---

# 拓展补充

用来介绍一些项目中未实现的功能补充。

## 静态资源处理

项目中只处理了 less等静态资源，**故 `vite.config.mts`的 `assetFileNames`配置写死为 'style.css'**。当有其他静态资源时，推荐写成函数来配置。

```ts
{
    ……
    assetFileNames: (v) => {
        if (v.names.toString().includes('css')) {
            return 'style.css';
        }
        return 'assets/[name][extname]';
    },
    ……
}
```

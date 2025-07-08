module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type类型定义，表示git提交的type必须在以下类型枚举范围内
    'type-enum': [
      2, // 当前验证的错误级别 2:错误
      'always', // 在什么情况下进行验证 always:随时
      [
        // 泛型内容，与.cz-config.js一致
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build', // 打包
      ],
    ],
    // subject大小写不做校验 0:关闭校验
    'subject-case': [0],
  },
};

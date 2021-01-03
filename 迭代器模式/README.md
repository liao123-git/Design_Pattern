# 观察者模式
### 介绍
- 顺序访问一个集合
- 使用者无需知道集合的内部结构（封装）

### 场景
- 网页事件绑定
- Promise
- jQuery callbacks
- nodejs 自定义事件
- nodejs 中：处理 http 请求；多进程通讯
- vue 和 React 组件生命周期触发
- vue watch

### 设计原则验证
- 迭代器对象和目标对象分离
- 迭代器将使用者与目标对象隔离开
- 符合开放封闭原则

### [样例](https://github.com/liao123-git/Design_Pattern/blob/main/%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F/src/index.js "样例")
# 观察者模式
### 介绍
- 发布 & 订阅
- 一对多
- 点咖啡，点好之后坐等被叫

### 场景
- 网页事件绑定
- Promise
- jQuery callbacks
- nodejs 自定义事件
- nodejs 中：处理 http 请求；多进程通讯
- vue 和 React 组件生命周期触发
- vue watch

### 设计原则验证
- 主题和观察者分离，不是主动出发而是被动监听，两者解耦
- 符合开放封闭原则

### [样例](https://github.com/liao123-git/Design_Pattern/blob/main/%E5%A4%96%E8%A7%82%E6%A8%A1%E5%BC%8F/src/index.js "样例")
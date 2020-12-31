# 代理模式
### 介绍
- 使用者无权访问目标对象
- 源对象使用的属性，代理之后不会发生变化

### 场景
- 网页事件代理
- jQuery $.proxy
- Es6 Proxy

### 设计原则验证
- 代理类和目标类分离，隔离开类和使用者
- 符合开放封闭原则

### [样例](https://github.com/liao123-git/Design_Pattern/blob/main/%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F/src/index.js "样例")
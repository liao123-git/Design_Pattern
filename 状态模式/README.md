# 状态模式
### 介绍
- 一个对象有状态变化
- 每次状态变化都会触发一个逻辑
- 不能总是 if...else 来控制

### 场景
- 有限状态机
    - 有限个状态、以及在这些状态之间的变化
    - 比如交通信号灯
    - 使用开源 lib：javaScript-state-machine

### 设计原则验证
- 将状态对象和主题对象分离，状态的变化逻辑单独处理
- 符合开放封闭原则

### [样例](https://github.com/liao123-git/Design_Pattern/blob/main/%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F/src/index.js "样例")
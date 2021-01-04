# 原型模式
### 介绍
- clone 自己，生成一个新对象
- java 默认有 clone 接口，不用自己实现

### 场景
- Object.create
    - prototype 可以理解为 ES6 class 的一种底层原理
    - 而 class 是实现面向对象的基础，并不是服务与某个模式
    - 若干年后 ES6 全面普及，大家可能会忽略掉 prototype
    - 但是 Object.create 却会长久存在
    
### [样例](https://github.com/liao123-git/Design_Pattern/blob/main/%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F/src/index.js "样例")
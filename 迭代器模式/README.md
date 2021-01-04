# 迭代器模式
### 介绍
- 顺序访问一个集合
- 使用者无需知道集合的内部结构（封装）

### 场景
- jQuery each
- ES6 Iterator
    - ES6 语法中，有序集合的数据类型已经有很多
    - Array Map Set String TypedArray arguments NodeList
    - 需要有一个统一的遍历接口来遍历所有数据类型
    - 以上数据类型，都有 [Symbol.iterator] 属性
    - 属性值是函数，执行函数返回一个迭代器
    - 这个迭代器就有 next 方法可顺序迭代子元素
    - for...of 就是 iterator

### 设计原则验证
- 迭代器对象和目标对象分离
- 迭代器将使用者与目标对象隔离开
- 符合开放封闭原则

### [样例](https://github.com/liao123-git/Design_Pattern/blob/main/%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F/src/index.js "样例")
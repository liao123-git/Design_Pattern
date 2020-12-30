# 面向对象
### 三要素
- 继承，子类继承父类
    - 父类是公共的，不仅仅服务于某个子类
    - 继承可将公共方法抽离出来，提高复用，减少冗余
    - [样例](https://github.com/liao123-git/Design_Pattern/blob/main/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/src/inheritance.js "样例")
- 封装，数据的权限和保密
    - public 完全开放
    - protected 对子类开放
    - private 对自己开放
    - 减少耦合，不该外露的不外露
    - 利于数据、接口的权限管理
    - es6目前不支持，一般认为 _ 开头的属性是private
    - [样例](https://github.com/liao123-git/Design_Pattern/blob/main/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/src/encapsulation.js "样例")
- 多态，同一接口不同实现
    - 统一接口，不同表现
    - JS应用极少
    - 需要结合Java等语言的接口、重写、重载等功能
    - 保持子类的开放性和灵活性
    - 面向接口编程
    - 了解即可
    - [样例](https://github.com/liao123-git/Design_Pattern/blob/main/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/src/polymorphisn.js "样例")

###为何使用面向对象
- 程序执行：顺序、判断、循环————结构化  
- 面向对象————数据结构化
- 对于计算机，结构化才是最简单的
- 变成应该简单和抽象


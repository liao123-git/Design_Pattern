# 命令模式
### 介绍
- 执行命令时，发布者和执行者分开
- 中间加入命令对象，作为中转站

### JS 中的应用
- 网页富文本编辑器操作，浏览器封装了一个命令对象
- document.execCommand('bold')
- document.execCommand('undo')


### 设计原则验证
- 命令对象与执行对象分开，解耦
- 符合开放封闭原则 

### [样例](https://github.com/liao123-git/Design_Pattern/blob/main/%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F/src/index.js "样例")
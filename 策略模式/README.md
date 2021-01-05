# 策略模式
### 介绍
- 不同策略分开处理
- 避免出现大量 if...else 或者 switch...case 
- 类似我做的 [Link_go](https://github.com/liao123-git/Link_go 'Link_go') 游戏中的 [322](https://github.com/liao123-git/Link_go/blob/479c5c46d716580f9fb0a7be3c239523a4f28ad7/15_Module_B/js/Map.js#L322 '322') - [357](https://github.com/liao123-git/Link_go/blob/479c5c46d716580f9fb0a7be3c239523a4f28ad7/15_Module_B/js/Map.js#L357 '357')
  
### 设计原则验证
- 不同策略，分开处理，而不是混合在一起
- 符合开放封闭原则

### [样例](https://github.com/liao123-git/Design_Pattern/blob/main/%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F/src/index.js "样例")
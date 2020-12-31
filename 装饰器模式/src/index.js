/*
//装饰器es7语法
@testDec
class Demo {
}

function testDec(target) {
    target.isDec = true;
}

alert(Demo.isDec);//应该打印true 我的环境没有安装所以报错了

//等同于
class Demo {
}
Demo = testDec(Demo) || Demo;

function testDec(target) {
    target.isDec = true;
}

alert(Demo.isDec);
*/

import {readonly} from 'core-decorators';

class Person {
    @readonly
    name(){
        return 'zhang san';
    }
}
let p = new Person();
alert(p.name());

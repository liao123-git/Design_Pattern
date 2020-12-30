import _ from 'lodash';

//样例1
class SingleObject {
    login() {
        console.log("login...");
    }
}

//闭包，防止变量污染
SingleObject.getInstance = (function () {
    let instance;
    return function () {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance;
    };
})();

let obj1 = SingleObject.getInstance();
obj1.login();
let obj2 = SingleObject.getInstance();
obj2.login();
console.log(obj1 === obj2);




//样例2
class LoginForm {
    constructor() {
        this.state = 'hide';
    }

    show() {
        if (this.state === 'show') {
            return alert('登录框已经显示');
        }
        this.state = 'show';
        console.log('登录框显示成功');
    }

    hide() {
        if (this.state === 'hide') {
            return alert('登录框已经隐藏');
        }
        this.state = 'hide';
        console.log('登录框隐藏成功');
    }
}

//闭包，防止变量污染
LoginForm.getInstance = (()=>{
    let instance;
    return ()=>{
        !instance && (instance = new LoginForm());
        return instance;
    };
})();

let login1 = LoginForm.getInstance();
login1.show();

let login2 = LoginForm.getInstance();
login2.hide();

console.log(login1 === login2);

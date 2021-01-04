class State {
    constructor(color){
        this.color = color;
    }
    handle(context) {
        console.log(`turn to ${this.color} light`);
        context.setState(this);
    }
}
class Context {
    constructor(){
        this.state = null;
    }
    getState(){
        return this.state;
    }
    setState(state){
        this.state = state;
    }
}
let context = new Context();
let green = new State('green');
let red = new State('red');

green.handle(context);
console.log(context.getState());
red.handle(context);
console.log(context.getState());

import StateMachine from 'javascript-state-machine';

let fsm = new StateMachine({
    init: '收藏',
    transitions: [
        {
            name: "doStore",
            form: "收藏",
            to: "取消收藏",
        },
        {
            name: "deleteStore",
            form: "取消收藏",
            to: "收藏",
        }
    ],
    methods: {
        onDoStore(){
            alert('收藏成功'); // 可以在这添加 post 请求
            updateText();
        },
        onDeleteStore(){
            alert('已经取消收藏'); // 可以在这添加 post 请求
            updateText();
        },
    }
});

let btn = document.createElement('button');
document.getElementsByTagName('body')[0].appendChild(btn);
btn.onclick = ()=>{
    if(fsm.is('收藏')){
        fsm.doStore();
    }else{
        fsm.deleteStore();
    }
};

function updateText(){
    btn.innerHTML = fsm.state;
}

updateText();

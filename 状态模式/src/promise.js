// Promise 三种状态：pending fullfilled rejected
// pending -> fullfilled 或者 pending -> rejected 不能逆向

import StateMachine from "javascript-state-machine";

let fsm = new StateMachine({
    init: 'pending',
    transitions: [
        {
            name: "resolve",
            form: "pending",
            to: "fullfilled",
        },
        {
            name: "reject",
            form: "pending",
            to: "rejected",
        }
    ],
    methods: {
        onResolve(state, data) {
            // data - fsm.resolve(xxx) 传递的参数; state - 当前状态机实例
            data.successList.forEach(fn => fn());
        },
        onReject() {
            // data - fsm.reject(xxx) 传递的参数; state - 当前状态机实例
            data.failed.forEach(fn => fn());
        },
    }
});

class MyPromise {
    constructor(fn) {
        this.successList = [];
        this.failList = [];
        fn(() => {
            fsm.resolve(this);
        }, () => {
            fsm.reject(this);
        });
    }

    then(successFn, failFn) {
        this.successList.push(successFn);
        this.failList.push(failFn);
    }
}

function loadImg(src) {
    const promise = new MyPromise((resolve, reject) => {
        let img = new Image();
        img.src = src;
        img.onload = ()=>{
            resolve(img);
        };
        img.onerror = ()=>{
            reject();
        }
    });
    return promise;
}
let src = 'https://oimageb8.ydstatic.com/image?id=-347965492012985291&product=adpublish&format=JPEG&w=520&h=347';
let result = loadImg(src);
result.then(()=>{
    console.log('ok1')
},()=>{
    console.log('ok2')
});
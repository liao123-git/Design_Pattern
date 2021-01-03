// node
const EventEmitter = require('events').EventEmitter;

class Dog extends EventEmitter {
    constructor(name){
        super();
        this.name = name;
    }
}
let simon = new Dog('simon');
simon.on("bark",function(){
    console.log(this.name,'barked-1');
});
simon.on("bark",function(){
    console.log(this.name,'barked-2');
});
setInterval(()=>{
    simon.emit('bark');
},1000);
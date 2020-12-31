class ReadImg {
    constructor(fileName) {
        this.fileName = fileName;
        this.loadFromDisk();
    }

    display() {
        console.log('display...' + this.fileName);
    }

    loadFromDisk() {
        console.log('loading...' + this.fileName);
    }
}

class ProxyImg {
    constructor(fileName) {
        this.realImg = new ReadImg(fileName);
    }

    display() {
        this.realImg.display();
    }
}

let proxyImg = new ProxyImg('1.png');
proxyImg.display();

/*
//jQuery $.proxy
$("#div1").click(function(){
    let _this = this;
    window.setTimeout(function(){
        $(this).html('321');
    });
});
*/

//请明星
let star = {
    name: "张XX",
    age: 25,
    phone: "s_1935216545",
};

let agent = new Proxy(star, {
    get: function (target, key) {
        if (key === 'phone') {
            //返回经纪人的电话
            return 'a_1232524';
        }
        if (key === 'price') {
            //明星不报价，经纪人报价
            return 12000;
        }
        return target[key];
    },
    set: function (target, key, val) {
        if (key === 'customPrice') {
            if (val < 10000) {
                throw new Error('价格太低');
            } else {
                target[key] = val;
                return true;
            }
        }
    }
});

console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

agent.customPrice = 1000;
console.log(agent.customPrice);
/*
//jQuery each

let arr = [1, 2, 3];
let nodeList = document.getElementsByTagName('p');
let $p = $('p');

arr.forEach((item) => {
    console.log(item);
});

let i, length = nodeList.length;
for (i = 0; i < length; i++) {
    console.log(nodeList[i]);
}

$p.each((key, p) => {
    console.log(key, p);
});

function each(data) {
    let $data = $(data); // 生成迭代器

    $data.each((key, val) => {
        console.log(key, val);
    });
}

each(arr);
each(nodeList);
each($p);
*/

class Iterator {
    constructor(container) {
        this.list = container.list;
        this.index = 0;
    }

    next() {
        if (this.hasNext()) {
            return this.list[this.index++];
        }
    }

    hasNext() {
        return this.index < this.list.length;
    }
}

class Container {
    constructor(list) {
        this.list = list;
    }

    getIterator() {
        return new Iterator(this);
    }
}

let container = new Container([1, 2, 3, 4, 5, 6]);
let iterator = container.getIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}

function each(data) {
    let iterator = data[Symbol.iterator]();

    let item = {done: false};
    while(!item.done){
        item = iterator.next();
        !item.done && console.log(item.value);
    }

    for (let item of data){
        console.log(item)
    }
}

each([1,2,3,4,5]);
let map = new Map();
map.set('a',123);
map.set('b',321);
each(map);
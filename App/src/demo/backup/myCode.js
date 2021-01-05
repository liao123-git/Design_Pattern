class App {
    constructor() {
        this.$el = document.createElement('div');
        this.$el.id = 'app';
        this.init();
    }

    init() {
        this.initShoppingCart();
        this.initList();
        document.getElementsByTagName('body')[0].appendChild(this.$el);
    }

    initShoppingCart() {
        new ShoppingCart(this);
    }

    initList() {
        new List(this);
    }
}

class List {
    constructor(app) {
        this.$el = document.createElement('div');
        this.$el.id = 'list';
        this.app = app;
        this.init();
    }

    init() {
        this.loadData().then((arr) => {
            arr.forEach((item) => {
                this.initListItem(item);
            });
            this.render();
        });
    }

    loadData() {
        const promise = new Promise((resolve, reject) => {
            let list = [
                {id: 1, name: "《JS 基础面试题》", price: 149, discount: 1},
                {id: 2, name: "《JS 高级面试题》", price: 366, discount: 1},
                {id: 3, name: "《React 模拟大众点评 webapp》", price: 248, discount: 0},
                {id: 4, name: "《zepto 设计与源码解读》", price: 0, discount: 0},
            ];
            resolve(list);
        });
        return promise;
    }

    initListItem(data) {
        new Item(data, this);
    }

    render() {
        this.app.$el.appendChild(this.$el);
    }
}

class Item {
    constructor(data, list) {
        this.$el = document.createElement('div');
        this.$el.className = 'item';
        this.data = data;
        this.list = list;
        this.cartIndex = false;
        this.cart = cart;
        this.init();
    }

    init() {
        this.initContent();
        this.initBtn();
        this.render();
        this.btn.onclick = () => {
            this.cartIndex === false ? this.addToCartHandle() : this.deleteFromCartHandle();
        };
    }

    initContent() {
        const name = document.createElement('p'), price = document.createElement('p');
        name.innerHTML = `名称：${this.data.name}`;
        price.innerHTML = `价格：${this.data.discount ? this.data.price * .8 : this.data.price}`;
        this.$el.appendChild(name);
        this.$el.appendChild(price);

    }

    initBtn() {
        this.btn = document.createElement('button');
        this.btn.innerHTML = `加入购物车`;
        this.$el.appendChild(this.btn);
    }

    addToCartHandle() {
        this.cartIndex = this.cart.add(this.data.name);
        this.btn.innerHTML = `从购物车删除`;
    }

    deleteFromCartHandle() {
        this.cartIndex = this.cart.del(this.cartIndex);
        this.btn.innerHTML = `加入购物车`;
    }

    render() {
        this.list.$el.appendChild(this.$el);
    }
}

class ShoppingCart {
    constructor(app) {
        this.$el = document.createElement('div');
        this.$el.className = 'item';
        this.app = app;
        this.cart = cart;
        this.init();
    }

    init() {
        this.initBtn();
        const hr = document.createElement('hr');
        this.$el.appendChild(hr);
        this.render();
        this.btn.onclick = () => {
            this.showCart();
        };
    }

    initBtn() {
        this.btn = document.createElement('button');
        this.btn.innerHTML = `购物车`;
        this.$el.appendChild(this.btn);
    }

    showCart() {
        alert(this.cart.getList());
    }

    render() {
        this.app.$el.appendChild(this.$el);
    }
}

class Cart {
    constructor() {
        this.list = [];
    }

    add(data) {
        return this.list.push(data) - 1;
    }

    del(id) {
        this.list.splice(id, 1);
        return false;
    }

    getList() {
        return this.list.toString();
    }
}

const cart = new Cart();
const app = new App();

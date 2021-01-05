class Cart {
    constructor() {
        this.list = [];
    }

    //初始化购物车
    add(data) {
        this.list.push(data);
    }

    //初始化列表
    del(id) {
        this.list = this.list.filter(item => {
            return item.id !== id;
        });
    }

    getList() {
        return this.list.map(item => {
            return item.name;
        }).join('\n');
    }
}

let getCart = (() => {
    let cart;
    return () => {
        if (!cart) {
            cart = new Cart;
        }
        return cart;
    }
})();

export default getCart;
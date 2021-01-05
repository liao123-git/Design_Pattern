import $ from 'jquery';
import getCart from '../ShoppingCart/Cart';

export default class ShoppingCart {
    constructor(app) {
        this.$el = $(`<div></div>`).css({
            paddingBottom: 10,
            borderBottom: '1px solid #ccc',
        });
        this.app = app;
        this.cart = getCart();
    }

    initBtn() {
        let btn = $("<button>购物车</button>");
        btn.click(() => {
            this.showCart();
        });

        this.$el.append(btn);
    }

    showCart() {
        this.cart.getList() &&  alert(this.cart.getList());
    }

    render() {
        this.app.$el.append(this.$el);
    }

    init() {
        this.initBtn();
        this.render();
    }
}
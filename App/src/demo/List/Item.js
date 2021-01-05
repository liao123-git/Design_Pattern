import $ from 'jquery';
import getCart from '../ShoppingCart/Cart';
import StateMachine from 'javascript-state-machine';

export default class Item {
    constructor(data, list) {
        this.$el = $(`<div></div>`);
        this.data = data;
        this.list = list;
        this.cart = getCart();
    }

    // 生成列表
    initContent() {
        this.$el.append(`<p>名称：${this.data.name}</p>`);
        this.$el.append(`<p>名称：${this.data.price}</p>`);
    }

    // 生成列表
    initBtn() {
        let btn = $("<button>");

        let _this = this;
        let fsm = new StateMachine({
            init: '加入购物车',
            transitions: [
                {
                    name: "addToCart",
                    from: "加入购物车",
                    to: "从购物车删除",
                },
                {
                    name: "deleteFromCart",
                    from: "从购物车删除",
                    to: "加入购物车",
                }
            ],
            methods: {
                onAddToCart() {
                    _this.addToCartHandle();
                    updateText();
                },
                onDeleteFromCart() {
                    _this.deleteFromCartHandle();
                    updateText();
                }
            }
        });

        function updateText() {
            btn.html(fsm.state);
        }

        btn.click(() => {
            fsm.is('加入购物车') ? fsm.addToCart() : fsm.deleteFromCart();
        });

        updateText();
        this.$el.append(btn);
    }

    addToCartHandle() {
        this.cart.add(this.data);
    }

    deleteFromCartHandle() {
        this.cart.del(this.data.id);
    }

    // 渲染
    render() {
        this.list.$el.append(this.$el);
    }

    init() {
        this.initContent();
        this.initBtn();
        this.render();
    }
}
import _ from 'lodash';

class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(selector));
        let len = dom ? dom.length : 0;
        for (let i = 0; i < len; i++) {
            this[i] = dom[i];
        }
        this.length = dom ? dom.length : 0;
        this.seletor = selector || '';
    }

    append(node) {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(this.seletor));
        let len = dom ? dom.length : 0;
        for (let i = 0; i < len; i++) {
            let div = document.createElement('div');
            div.innerHTML = node;
            dom[i].appendChild(div.childNodes[0]);
        }
    }

    addClass(name) {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(this.seletor));
        let len = dom ? dom.length : 0;
        for (let i = 0; i < len; i++) {
            let className = dom[i].className;
            let strs = className.split(" ");
            let already = false;
            for (let k = 0; k < strs.length; k++) {
                strs[k] === name && (already = true);
            }
            !already && (dom[i].className = className + ` ${name}`);
        }
    }

    html(data) {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(this.seletor));
        let len = dom ? dom.length : 0;
        for (let i = 0; i < len; i++) {
            dom[i].innerHTML = data;
        }
    }
}

window.$ = function (selector) {
    //工厂模式
    return new jQuery(selector);
};

$("body").append('<div class="test" style="color: red">asdfasdf</div>');
let div = $(".test");
div.addClass('green');
div.html('green');


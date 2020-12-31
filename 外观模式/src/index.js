function bindEvent(elem, type, selector, fn) {
    if (fn == null) {
        fn = selector;
        selector = null;
    }
}

//调用，两种都有效
bindEvent(elem, 'click', '#div1', fn);
bindEvent(elem, 'click', fn);
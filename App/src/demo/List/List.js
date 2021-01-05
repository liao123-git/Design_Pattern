import $ from 'jquery';
import createItem from './CreateItem';


export default class List {
    constructor(app) {
        this.$el = $(`<div></div>`);
        this.app = app;
    }

    // 获取数据
    loadData() {
        return [
            {
                "id": 1,
                "name": "《JS 基础面试题》",
                "price": 149,
                "discount": 1
            },
            {
                "id": 2,
                "name": "《JS 高级面试题》",
                "price": 366,
                "discount": 1
            },
            {
                "id": 3,
                "name": "《React 模拟大众点评 webapp》",
                "price": 248,
                "discount": 0
            },
            {
                "id": 4,
                "name": "《zepto 设计与源码解读》",
                "price": 0,
                "discount": 0
            }
        ];
    }

    // 生成列表
    initItemList(data) {
        data.forEach(itemData => {
            // 创建一个 Item 然后 init
            let item = createItem(itemData, this);
            item.init();
        });
    }

    // 渲染
    render() {
        this.app.$el.append(this.$el);
    }

    init() {
        let data = this.loadData();
        this.initItemList(data);
        this.render();
    }
}
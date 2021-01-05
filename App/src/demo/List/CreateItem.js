import Item from './Item';

function createDiscount(itemData) {
    return new Proxy(itemData, {
        get(target, key, receiver) {
            if (key === 'name') {
                return `${target[key]} 【折扣】`;
            } else if (key === 'price') {
                return target[key] * .8;
            }
        }
    })
}

export default (data, app) => {
    data.discount && (data = createDiscount(data));
    return new Item(data, app);
}
import _ from 'lodash';

/*
    某停车场，分3层，每层100车位。
    每个车位都能监控到车辆的驶入和离开。
    车辆进入前，显示每层的空余车位数量。
    车辆进入时，摄像头可识别车牌号和事件。
    车辆出来时，出口显示器显示车牌号和停车时长。
*/

// 停车场
class Park {
    constructor(floors) {
        this.floors = floors || [];
        this.camera = new Camera();
        this.screen = new Screen();
        this.carList = {};
    }

    emptyNum() {
        this.floors.forEach((floor) => {
            console.log(`第${floor.index}层还有${floor.emptyPlaceNum()}空闲车位`);
        });
    }

    in(car) {
        //通过摄像头获取信息
        const info = this.camera.shot(car);
        //随机一个车位
        const i = ~~(Math.random() * 100 % 100);
        const place = this.floors[~~(Math.random() * this.floors.length)].places[i];
        place.in();
        info.place = place;
        //储存车辆信息
        this.carList[car.num] = info;
    }

    out(car) {
        //获取车辆信息
        const info = this.carList[car.num];
        //占用的车位清空
        info.place.out();
        //把车辆信息显示在屏幕上
        this.screen.show(car, info.inTime);
        //防止内存溢出
        delete this.carList[car.num];
    }
}

//层
class Floor {
    constructor(index) {
        this.index = index;
        this.places = [];
    }

    emptyPlaceNum() {
        let num = 0;
        this.places.forEach((place) => {
            place.empty && num++;
        });
        return num;
    }
}

//车位
class Place {
    constructor() {
        this.empty = true;
    }

    in() {
        this.empty = false;
    }

    out() {
        this.empty = true;
    }
}


//摄像头
class Camera {
    shot(car) {
        //返回车辆信息
        return {num: car.num, inTime: new Date()};
    }
}

//屏幕
class Screen {
    show(car, inTime) {
        console.log("车牌号", car.num, ";", "停车时间", new Date() - inTime);
    }
}


//车辆
class Car {
    constructor(num) {
        this.num = num;
    }
}

const floors = [];
for (let i = 0; i < 3; i++) {
    let floor = new Floor(i + 1);
    for (let j = 0; j < 100; j++) {
        let place = new Place();
        floor.places.push(place);
    }
    floors.push(floor);
}
const park = new Park(floors);

const car1 = new Car(110);
const car2 = new Car(200);
const car3 = new Car(300);

console.log('第一辆车进入');
park.emptyNum();
park.in(car1);
window.setTimeout(() => {
    console.log('第二辆车进入');
    park.emptyNum();
    park.in(car2);
    park.out(car1);
}, 100);

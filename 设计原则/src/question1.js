/*
    打车时，可以打专车或者快车。任何车都有车牌号和名称。
    不同车价格不同，快车每公里1元，专车每公里2元。
    行程开始时，显示车辆信息。
    行程结束时，显示打车金额。
*/

//车的父类
class Car {
    constructor(number, name) {
        this.number = number;
        this.name = name;
    }
}

//专车
class SpecialCar extends Car {
    constructor(number, name) {
        super(number, name);
        this.price = 2;
    }
}

//快车
class Express extends Car {
    constructor(number, name) {
        super(number, name);
        this.price = 1;
    }
}

//行程
class Trip {
    constructor(car) {
        this.car = car;
        this.km = 5;
    }

    start() {
        console.log(this.car.number);
        console.log(this.car.name);
    }

    end() {
        console.log(this.car.price * this.km);
    }
}

let zhuanche = new SpecialCar('A.16D57','Benz');
let kuaiche = new Express('A.E221D','Toyota');
let trip = new Trip(zhuanche);
trip.start();
trip.end();
let trip2 = new Trip(kuaiche);
trip2.start();
trip2.end();

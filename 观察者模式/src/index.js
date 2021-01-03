//主题，保存状态，状态变化之后出发所有观察者对象
class Subject {
    constructor() {
        this.state = 0;
        this.observers = []
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
        this.notifyAllObservers();
    }

    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update();
        });
    }

    attach(observer) {
        this.observers.push(observer);
    }
}

class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }

    update() {
        console.log(`${this.name} update, state: ${this.subject.getState()}`);
    }
}

let subject1 = new Subject();
let ob1 = new Observer('ob1', subject1);
let ob2 = new Observer('ob2', subject1);
ob1.update();
ob2.update();
subject1.setState(123);

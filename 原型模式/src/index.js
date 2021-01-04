const prototype = {
    getName() {
        return this.first + ' ' + this.last;
    },
    say() {
        alert('hello');
    },
};

let x = Object.create(prototype);
x.first = "X";
x.last = "x";
alert(x.getName());
x.say();

let y = Object.create(prototype);
y.first = "Y";
y.last = "y";
alert(y.getName());
y.say();
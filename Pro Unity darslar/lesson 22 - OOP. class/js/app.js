'use strict';

// OOP - OYD - obyektga yo'naltirilgan dasturlash

let index = 0;

const DB = [];

class User {
    constructor(username, login, passwd) {
        this.id = index++;
        this.username = username;
        this.login = login;
        this.password = passwd;
        this.isHuman = true;
    }

    sayHello() {
        console.log('Hello, ' + this.username);
    }
}

const form = document.querySelector('form'),
      username = form.elements.username,
      login = form.elements.login,
      passwd = form.elements.passwd;

form.addEventListener('submit', e => {
    e.preventDefault();
    let user = new User(username.value, login.value, passwd.value);
    DB.push(user);
    form.reset();
    console.log(DB);
});

let carIndex = 0;

class Car {
    constructor(mark, model) {
        this.id = carIndex++;
        this.mark = mark;
        this.model = model;
        this.engineOn = false;
    }

    toggleEngine() {
        // if (this.engineOn) {
        //     this.engineOn = false;
        //     console.log('Engine off');
        // } else {
        //     this.engineOn = true;
        //     console.log('Engine on');
        // }

        this.engineOn = this.engineOn ? false : true;
    }
}

class ElectroCar extends Car {
    constructor(mark, model, engine, color, speed) {
        super(mark, model);
        this.engine = engine;
        this.color = color;
        this.speed = speed + 'km/h';
    }

    pushGas() {
        if (this.engineOn) {
            console.log('Wroom! Wroom!');
        } else {
            console.log('Engine off');
        }
    }
}

let car1 = new ElectroCar('BMW', 'I7', 'V8', 'graphite', '360');
car1.toggleEngine();
car1.pushGas();

console.table(car1);
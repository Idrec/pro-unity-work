'use strict';

// OOP - OYD - obyektga yo'naltirilgan dasturlash

let index = 0;

// PascalCase
function GetUser(username, login, passwd) {
    this.id = index++;
    this.username = username;
    this.login = login;
    this.password = passwd;
    this.isHuman = true;
    // this.sayHello = function() {
    //     console.log('Hello ' + this.username);
    // }
}

GetUser.prototype.sayHello = function() {
    console.log('Hello, ' + this.username);
}

const DB = [];

const form = document.querySelector('form'),
      username = form.elements.username,
      login = form.elements.login,
      password = form.elements.passwd;

form.addEventListener('submit', e => {
    e.preventDefault();
    let user = new GetUser(username.value, login.value, password.value);
    DB.push(user);
    form.reset();
    console.log(DB);
});
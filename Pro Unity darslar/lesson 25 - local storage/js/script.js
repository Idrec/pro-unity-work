'use strict';

/** localStorage metodlari
 * setItem - qiymat o'rnatish
 * getItem - qiymat olish
 * removeItem - qiymatni o'chirish
 * clear - barcha qiymatlarni o'chirish
 */

// localStorage.setItem('hello', 'world'); // localStorage da 'hello' kaliti ostida 'world' qiymatni o'rnatish
// localStorage.setItem('hello', 123); // localStorage dagi 'hello' kalitiing qiymatini o'zgartirish
// localStorage.setItem('something', 'else');

// console.log(localStorage.getItem('hello')); // localStorage dan 'hello' kalitining qiymatini olish
// console.log(localStorage.getItem('something')); // localStorage dan 'something' kalitining qiymatini olish

// localStorage.removeItem('hello'); // localStorage dagi 'hello' kalitini o'chirish

// localStorage.clear(); // localStorage dagi barcha kalitlarni o'chirish

const form = document.querySelector('.form'),
      input = document.querySelector('.text_input'),
      check = document.querySelector('#checkbox'),
      changeBtn = document.querySelector('.change_btn');

/** bosqichlar:
 * sayt ochilishi
 * localStorage tekshirilishi
 * qiymatni input o'rnatilishi
 */

let inputValueFromLS = localStorage.getItem('input');
if (inputValueFromLS) {
    input.value = inputValueFromLS;
}

let stateOfChekFromLS = JSON.parse(localStorage.getItem('checkboxState'));
if (stateOfChekFromLS) {
    check.checked = stateOfChekFromLS;
}

form.addEventListener('submit', e => {
    e.preventDefault(); // sahifani standart hodisasini(o'zini yangilashi) bekor qilish
    localStorage.setItem('input', input.value);
    input.value = '';
});

check.addEventListener('change', e => {
    localStorage.setItem('checkboxState', JSON.stringify(check.checked));
})
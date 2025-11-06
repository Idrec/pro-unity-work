'use strict';

const btn = document.querySelector('.btn');

// btn.onclick = function() {
//     alert('knopka bosildi');
// }

// btn.onclick = () => {
//     alert('knopka bosildi');
// }

// Hodisa funksiyasini tashqarida yaratish
// function btnClickHandler() {
//     let str;
//     str = 'knopka bosildi';
//     alert(str);
// }

// btn.onclick = btnClickHandler;

// Hodisa tashqi funksiyasi parametriga qiymat berish
// function btnClickHandler(str) {
//     alert(str);
// }

// btn.onclick = () => {
//     btnClickHandler('hello');
// }

// Hodisani xususiyatda boshqarishning kamchiligi
// btn.onclick = function() {
//     console.log('hello');
// }

// btn.onclick = () => {
//     console.log('world');
// }

// addEventListener metodi
// btn.addEventListener('click', function() {
//     console.log('hello')
// });

// btn.addEventListener('click', () => {
//     console.log('world');
// });

// Hodisa funksiyasini tashqarida yaratish
// function btnClickHandler() {
//     let str;
//     str = 'knopka bosildi';
//     console.log(str);
// }

// btn.addEventListener('click', btnClickHandler);

// Hodisa tashqi funksiyasi parametriga qiymat berish
// function btnClickHandler(str) {
//     console.log(str);
// };

// btn.addEventListener('click', () => {
//     btnClickHandler('hello');
// });

// Hodisa obyekti
// btn.addEventListener('click', (event) => {
//     console.log(event);
//     console.log(event.target);
// });

// Sasihafi standart hodisasini bekor qilish
// const link = document.querySelector('a');

// link.addEventListener('click', (e) => {
//     e.preventDefault(); // sahifani standart hodisasini bekor qilish metodi
//     console.log(e.target);
// })

// Form bilan amallar
// const form = document.forms; // document dagi barcha form teglari to'planmasi
// const form = document.forms; 
// const form = document.forms[0]; 
// const secondForm = document.forms['second_form']; 

const form = document.querySelector('[name="form"]'),
      login = document.querySelector('[type="text"]'),
      passwd = document.querySelector('[type="password"]'),
      checkbox = document.querySelector('[type="checkbox"]');
    
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = {
        login: login.value,
        password: passwd.value,
        remeber: checkbox.checked,
    }
    login.value = '';
    passwd.value = '';
    checkbox.checked = false;

    console.log(data);
});

// Sarlavha bilan misol
const title = document.querySelector('h1');

title.addEventListener('mouseenter', e => {
    e.target.style.color = 'red';
})

title.addEventListener('mouseleave', e => {
    e.target.removeAttribute('style');
})
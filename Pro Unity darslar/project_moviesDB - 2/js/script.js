/* Задания на урок:

1) Forma to'ldirilganidan so'ng "Подтвердить" knopkasi bosilganida sahifa yangilanmasin, inputda kiritilgan qiymat filmlar massiviga va filmar ro'yxatiga qo'shilsin
P.S: bu yerda har xil yechim bor hammasi qabul ishlasa bas

2) Agar film nomi 21 ta simvoldan ko'p bo'lsa uni kesib oxirida 3 ta nuqta qoyilsin

3) Musor korzinasi bosilganda film ro'yxatdan yo'qolsin (qiyin)

4) Agar checkbox da "птичка" turgan bo'lsa konsolda 'Yoqtiriladigan filmlar ro'yxatiga kiritildi!' degan matn chiqsin 

5) Filmar alfavit bo'yicha sortirovkalangan bo'lsin  */


'use strict';


const movieDB = {
    movies: [
        'Росомаха',
        'Интерстеллар',
        'Джон Уик',
        'Марсианин',
        'Аватар: путь воды',
        'Мстители',
    ],
};


const reklama = document.querySelectorAll('.promo__adv img');
reklama.forEach(img => img.remove());


document.querySelector('.promo__genre').textContent = 'драма';


document.querySelector('.promo__bg').style.background = 'url("./img/bg.jpg") center/cover no-repeat';

const list = document.querySelector('.promo__interactive-list');
const form = document.querySelector('form.add');
const input = form.querySelector('.adding__input');
const checkbox = form.querySelector('[type="checkbox"]');


function showMovies() {
    list.innerHTML = '';

    movieDB.movies.sort(); 

    movieDB.movies.forEach((film, i) => {
       
        if (film.length > 21) {
            film = film.slice(0, 21) + '...';
        }

        
        list.innerHTML += `
            <li class="promo__interactive-item">
                ${i + 1}. ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    
    const deleteBtns = document.querySelectorAll('.delete');
    deleteBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            movieDB.movies.splice(index, 1);
            showMovies();
        });
    });
}

showMovies(); 


form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    let newFilm = input.value; 
    const liked = checkbox.checked; 

    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = newFilm.slice(0, 21) + '...';
        }

        movieDB.movies.push(newFilm); 
        showMovies(); 

        if (liked) {
            console.log('Yoqtiriladigan filmlar ro\'yxatiga kiritildi!');
        }
    }

    form.reset(); 
});



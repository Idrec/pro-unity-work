/* Задания на урок:

/**
 * 1) Sahifaning o'ng tomonidan reklama rasmlarini yo'qoting
 * 2) Filmning "комедия" janrini "драма" ga o'zgartiring
 * 3) Bosh fonda turgan rasmni "bg.jpg" ga o'zgartiring. Rasm img papkada joylashgan
 * 4) Filmlar ro'yxatini ushbu JS dokumentda berilgan ma`lumotlardan tuzing. Ro'xatni alfavit bo'yicha sortirovka qiling
 * 5) Ro'yxat elementlarini son bilan belgilang
 */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Аватар"
    ]
};

// 1
const bg = document.querySelectorAll('.promo__adv img');
Image.forEach((item) => item.remove());

//2
const genre = document.querySelector('.promo__genre');

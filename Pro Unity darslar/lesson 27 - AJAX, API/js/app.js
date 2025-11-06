'use strict';

// AJAX - ascynchronicus JavaScript and XML
// API - application programm iterface

const xhr = new XMLHttpRequest();

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

/** HTTP - metodlar:
 * GET - serverdan ma`lumot olish
 * POST - serverga ma`lumot yuborish
 * PUT - serverdagi ma`lumotni yangilash
 * DELETE - serverdagi ma`lumotni o`chirish
 * PATCH - serverdagi ma`lumotni qisman yangilash
 * HEAD - serverdan faqat sarlavhalarni olish
 * OPTIONS - serverga so`rov yuborish
 * CONNECT - serverga ulanish
 * TRACE - serverdagi so`rovni tekshirish
 */

xhr.open('POST', API_URL);
xhr.responseType = 'json';

let item = {
    title: 'something',
    body: 'hello world i am...'
}

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(JSON.stringify(item));

xhr.addEventListener('readystatechange', (e) => {
    console.log(xhr.readyState);
    // console.log(xhr.status);
});

/**
 * request - serverga yuborilgan so`rov
 * response - serverdan olingan javob
 * readyState - so`rovning holati
 * status - so`rovning holatini ifodalaydigan status (200, 404, 500 va h.k.)
 */

xhr.addEventListener('load', (e) => {
    // console.log( JSON.parse(xhr.response) );
    // console.log( xhr.response );

    if (xhr.readyState === 4 && xhr.status < 400) {
        console.log(xhr.response);
    } else {
        throw new Error(`Noma\`lum xatolik... status: ${xhr.status}`);
    }
});

xhr.addEventListener('error', (e) => {
    throw new Error(`Noma\`lum xatolik... status: ${xhr.status}`);
});



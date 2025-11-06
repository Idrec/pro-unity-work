'use strict';

console.log('Serverga murojaat...');

// Without promise
// setTimeout(() => {
//     let backendData = {
//         id: 1,
//         name: 'John Doe',
//         modified: false,
//     };
//     console.log('Ma`lumotlarni tekshiryabmiz, kuting...');

//     if (backendData.hasOwnProperty('dsazsa')) {
//         setTimeout(() => {
//             console.log('Ma`lumotlar qabul qilindi:', backendData);
//         }, 2000);
//     } else {
//         console.error('Xatolik!');
//     }
// }, 2000);

const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let backendData = {
            id: 1,
            name: 'John Doe',
            modified: false,
        };
        console.log('Ma`lumotlarni tekshiryabmiz, kuting...');

        if (backendData.hasOwnProperty('id')) {
            setTimeout(() => {
                resolve(backendData);
            }, 2000);
        } else {
            reject('Xatolik!');
        }
    }, 2000);
});

p.then(function (data) {
    data.modified = true;
    return data;
}).then((data) => {
    console.log('Ma`lunotlar qabul qilindi:', data);
}).catch((err) => {
    throw Error(err);
}).finally(() => {
    console.log('Hamma amallar bajarildi')
});

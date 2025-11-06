'use strict';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

/*
const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL);
    xhr.responseType = 'json';
    xhr.send();

    xhr.addEventListener('load', (e) => {
        if (xhr.readyState === 4 && xhr.status < 400) {
            resolve(xhr);
        } else {
            reject(xhr);
        }
    });

    xhr.addEventListener('error', (e) => {
        reject(xhr);
    });
});

p
    .then((data) => {
        return data.response;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        throw new Error(`Noma\`lum xatolik... status: ${err.status}`);
    });
*/

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.send();

        xhr.addEventListener('load', (e) => {
            if (xhr.readyState === 4 && xhr.status < 400) {
                resolve(xhr);
            } else {
                reject(xhr);
            }
        });

        xhr.addEventListener('error', (e) => {
            reject(xhr);
        });
    });
}

sendRequest('GET', API_URL)
    .then(data => {
        return data.response;
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        throw new Error(`Noma\`lum xatolik... status: ${err.status}`)
    })
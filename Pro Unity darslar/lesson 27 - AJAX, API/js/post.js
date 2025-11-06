'use strict';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function sendRequest(method, url, body=null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(body));

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

let item = {
    title: 'something',
    body: 'hello world i am...'
}

sendRequest('POST', API_URL, item)
    .then(data => {
        return data.response;
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        throw new Error(`Noma\`lum xatolik... status: ${err.status}`)
    })
'use strict';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// async function sendRequest(method, url, body=null) {
//     let options = {
//         method,
//         headers: {'Content-Type': 'application/json'}
//     }

//     if (method === 'POST' && body) {
//         options.body = JSON.stringify(body);
//     }

//     let response = await fetch(url, options);
//     let json;
//     if (response.ok) {
//         json = await response.json();
//         console.log(json);
//     } else {
//         throw new Error(`Somethin went wrong... status: ${response.status}`);
//     }
// }

async function sendRequest(method, url, body = null) {
    try {
        let options = {
            method,
            headers: { 'Content-Type': 'application/json' },
        };

        if (method === 'POST' && body) {
            options.body = JSON.stringify(body);
        }

        let response = await fetch(url, options);
        let json;
        if (response.ok) {
            json = await response.json();
            console.log(json);
        } else {
            throw new Error(
                `Something went wrong... status: ${response.status}`
            );
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

sendRequest('GET', API_URL);

let item = {
    title: 'something',
    body: 'hello world i am...',
};

sendRequest('POST', API_URL, item);

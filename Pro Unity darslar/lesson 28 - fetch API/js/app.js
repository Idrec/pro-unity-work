'use strict';

const API_URL = 'https://jsonplaceholder.typicode.com/posdsats';

// fetch(API_URL)
//     .then(response => {
//         return response.json();
//     })
//     .then(json => {
//         console.log(json);
//     })

function sendRequest(method, url, body=null) {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Something went wrong... status: ${response.status}`);
            }
        })
        .catch(err => {
            throw new Error(err);
        })
}

sendRequest('GET', API_URL)
    .then(json => {
        console.log(json);
    })
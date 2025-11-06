'use strict';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function sendRequest(method, url, body=null) {
    let options = {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return fetch(url, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Someting went wrong... status: ${response.status}`);
            }
        })
        
        .catch(err => {
            throw new Error(err);
        })
}

let item = {
    title: 'something',
    body: 'i am...'
}

sendRequest('POST', API_URL, item)
    .then(json => console.log(json))

sendRequest('GET', API_URL);

'use strict';

// const request = require('request');
// let found;

// request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {

//     let users = JSON.parse(body);

//     found = users.find(person => person.name === 'Ervin Howell');
//     console.log(found);

//     request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {

//         let posts = JSON.parse(body);
    
//         let filterPosts = posts.filter(post => post.userId === found.id);
//         console.log(filterPosts);       

//     });

// });

const request = require('request');

const promise = new Promise(function (resolve, reject) {

    request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
        let users = JSON.parse(body);
        let found = users.find(person => person.name === 'Ervin Howell');
        console.log(found);
        resolve(found);
    });

});

promise.then(function (found) {

    request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {
        let posts = JSON.parse(body);
        let filterPosts = posts.filter(post => post.userId === found.id);
        console.log(filterPosts);
    });

});


'use strict';

const request = require('request');
let found;

request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.

    let users = JSON.parse(body);
    // for(const person of users) {
    //     if (person.name === 'Ervin Howell') {
    //         console.log(person);
    //     }
    // }

    found = users.find(person => person.name === 'Ervin Howell');
    console.log(found);

    request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {

        let posts = JSON.parse(body);
    
        let filterPosts = posts.filter(post => post.userId === found.id);
        console.log(filterPosts);

        // for (let post of posts) {
        //     if(post.userId === found.id) {
        //         console.log(post);
        //     }
        // }            

    });

});
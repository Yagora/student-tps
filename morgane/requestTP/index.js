"use strict";

const request = require("request");

const USER = "Ervin Howell";

const getFilteredPost = new Promise(function (resolve, reject) {
  request("https://jsonplaceholder.typicode.com/users", function (
    __,
    ___,
    body
  ) {
    let users = JSON.parse(body);

    let found = users.find((person) => person.name === USER);

    resolve(found);
  });
}).then((found) => {
  request("https://jsonplaceholder.typicode.com/posts", function (
    __,
    ___,
    body
  ) {
    let posts = JSON.parse(body);

    const filteredPosts = posts.filter((post) => post.userId === found.id);
    console.log(filteredPosts);
    return filteredPosts;
  });
});

console.log(getFilteredPost);

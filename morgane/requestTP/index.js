"use strict";

const request = require("request");
/* 
request("https://jsonplaceholder.typicode.com/users", function (__, ___, body) {
  let users = JSON.parse(body);

  found = users.find((person) => person.name === "Ervin Howell");
  console.log(found);

  request("https://jsonplaceholder.typicode.com/posts", function (
    __,
    ___,
    body
  ) {
    let posts = JSON.parse(body);

    const filteredPosts = posts.filter((post) => post.userId === found.id);
    console.log(filteredPosts);
  });
}); */

const getFilteredPost = new Promise(function (resolve, reject) {
  request("https://jsonplaceholder.typicode.com/users", function (
    __,
    ___,
    body
  ) {
    let users = JSON.parse(body);

    let found = users.find((person) => person.name === "Ervin Howell");

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

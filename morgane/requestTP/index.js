"use strict";

const request = require("request");
let found;
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

const firstPromise = new Promise(function (resolve, reject) {
  request("https://jsonplaceholder.typicode.com/users", function (
    __,
    ___,
    body
  ) {
    let users = JSON.parse(body);

    found = users.find((person) => person.name === "Ervin Howell");

    resolve(console.log(found));
  });
}).then(() => {
  request("https://jsonplaceholder.typicode.com/posts", function (
    __,
    ___,
    body
  ) {
    let posts = JSON.parse(body);

    const filteredPosts = posts.filter((post) => post.userId === found.id);
    return console.log(filteredPosts);
  });
});

console.log(firstPromise);

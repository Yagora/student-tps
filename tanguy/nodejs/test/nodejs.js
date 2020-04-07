'use strict';

const fs = require('fs');
const request = require('request');
const addFunction = require('./calcul')
console.log('FIRST')
console.log('Second')

fs.exists('./conf.txt',  function (result) {
    console.log(result)
});

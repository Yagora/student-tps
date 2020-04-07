'use strict';

const WebSocket = require('ws');
const http = require('http');

const ws = new WebSocket('ws://51.77.150.126:8585');

ws.on('open', function () {
    console.log('yes je suis connecté');
    ws.send('coucouc c"est mon message')
});

ws.on('message', data => {
    console.log(data);
})
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Ecrir un message dans le chat ', (answer) => {
    ws.send(answer);
});
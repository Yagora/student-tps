'use strict';

const WebSocket = require('ws');

const ws = new WebSocket('ws://51.77.150.126:8585');

ws.on('open', function () {
    console.log('\nMaintenant tu peux écrire dans le chat\n');
});

ws.on('message', data => {
    console.log(data);
})
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function read() {
    rl.question('', (answer) => {
        ws.send('Tanguy : ' + answer);
        read();
    });
}

read();
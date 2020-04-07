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

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Le cours du bitcoin est de : 14 euro');
    response.end();
}).listen(8000)
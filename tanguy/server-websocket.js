'use strict';

const WebSocket = require('ws');

const wss = new WebSocket.Server({
    port: 8585
});

wss.on('connection', ws => {
    ws.send('Bienvenue dans le tchat 2.0');
    ws.on('message', function (data) {
        wss.clients.forEach(function (client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
              client.send(data);
            }
        });
    });
});
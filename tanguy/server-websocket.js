'use strict';

const { Server } = require('ws');

const wss = new Server({
    port: 8585
});

wss.on('connection', ws => {
    ws.send('Bienvenue dans le tchat 2.0');
    ws.on('message', function (name) {
        wss.clients.forEach(function (client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
              client.send(data);
            }
        });
    });
});
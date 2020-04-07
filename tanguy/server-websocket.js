'use strict';

const { Server } = require('ws');

const wss = new Server({
    port: 8585
});

wss.on('connection', ws => {
    console.log('Un arrivant est la');
    ws.send('Bonjour je suis content de te voir qui es tu ?');
    ws.on('message', function (name) {
        console.log(`Bienvenue, ${name} !`)
    });
});
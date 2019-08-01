const express = require('express');
const app = express();

const server = app.listen(1337, function () {
    console.log('server running on port 1337');
});

const io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.on('message', (message) => {
        io.emit('message', message);
    });
});


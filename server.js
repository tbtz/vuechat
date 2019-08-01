const express = require('express');
const app = express();

const server = app.listen(1337, function () {
    console.log('server running on port 1337');
});


const io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log(socket.id);

    socket.on('message', (x) => {
        console.log(x);
        io.emit('message', x);
    })
});


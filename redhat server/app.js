const express = require('express');
const app = express()
const path = require('path')
const server = require('http').createServer(app);
const io = require('socket.io')(server);

port = 3000;
app.use('/app', express.static(path.join(__dirname, 'public')))

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('start-red', function (msg) {
        socket.broadcast.emit('start-red');
    });
});

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
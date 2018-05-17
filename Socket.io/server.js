//----
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});
//print out the chat message event:
io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
    });
});
//send the message to everyone, including the sender.
io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        debugger
        io.emit('chat message', msg);
    });
});



http.listen(3000, function() {
    console.log('listening on *:3000');
});
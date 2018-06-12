var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
    console.log("A user is connected");
    
    socket.on('disconnect', function() {
        console.log("User disconnected");
    })

    socket.on('chat message', function(msg) {
        if(msg.length > 0) {
            io.emit('chat message', msg);
        }
    });
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

http.listen(3000, function(){
    console.log("Listening on *:3000");
})
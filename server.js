var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){  
    socket.on('hi', function() {
        data = { name: 'Test', message: 'Hi Too!' };
        io.sockets.emit('init', data);
    });
    
    socket.on('pgsql', function (data) {
        //do something with data
        console.log(data);
        socket.broadcast.emit("pgsql", data);
    });
  
    socket.on('disconnect', function () {
        //disconnected users
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

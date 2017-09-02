const path = require('path');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIo(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('new user connection');

	socket.emit('newMessage', generateMessage('admin', 'wellcome to the chat app. '));

	socket.broadcast.emit('newMessage', generateMessage('admin', 'new user joined'));

	socket.on('createMessage', (message) => {
		console.log('createMessage', message);
		io.emit('newMessage', generateMessage(message.from, message.text));
	});

	socket.on('disconnect', () => {
		console.log('user was disconnected');
	});
});

server.listen(port, () => {
	console.log('server is up on ' + port);
});

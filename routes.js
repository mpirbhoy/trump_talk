//This contains the routes that the server allows
var fs = require('fs');
var path = require("path");
var express = require('express');
const socketIO = require('socket.io');
var controller = require('./controller/controller');

module.exports = function(app) {


  	const io = socketIO(app);

	io.on('connection', function(socket){

		socket.on('chat message', function (receivedMsg) {
			console.log(receivedMsg);
		    controller.getResponse(receivedMsg, function (replyMsg, imageName) {socket.emit('trump response', { trumpMsg: replyMsg, image: imageName})});
		});
	})
	
	
}
//This contains the routes that the server allows
var fs = require('fs');
var path = require("path");
var express = require('express');

var controller = require('./controller/controller');

module.exports = function(app) {

	//Get request for Home page 
	app.get('/', controller.getHome);	
	
	//Using socket.io
	var server = require('http').createServer(app);
	var io = require('socket.io').listen(server);
  	server.listen((process.env.PORT || 3000), (process.env.URL || '127.0.0.1'));

	io.on('connection', function(socket){

		socket.on('chat message', function (receivedMsg) {
			console.log(receivedMsg);
		    controller.getResponse(receivedMsg, function (replyMsg, imageName) {socket.emit('trump response', { trumpMsg: replyMsg, image: imageName})});
		});
	})
	
	
}
//This contains the routes that the server allows
var fs = require('fs');
var path = require("path");
var express = require('express');

var controller = require('./controller/controller');

module.exports = function(app) {
	// var io = require('socket.io')(app);

	//Get request for Home page 
	app.get('/', controller.getHome);	
	
	//Using socket.io
	var server = require('http').Server(app);
	var io = require('socket.io')(server);
	io.on('connection', function(socket){
		io.on('chat message', function (receivedMsg) {
			console.log(receivedMsg);
		    socket.emit('trump response', { trumpMsg: receivedMsg });
		  // socket.on('my other event', function (data) {
		  //   console.log(data);
		  // });
		});
	})
	
	
}
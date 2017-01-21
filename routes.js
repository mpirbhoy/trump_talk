//This contains the routes that the server allows
var fs = require('fs');
var path = require("path");
var express = require('express');
var io = require('socket.io')(server);
var controller = require('./controller/controller');

module.exports = function(app) {

	//Get request for Home page 
	app.get('/', controller.getHome);	
	
  //Using socket.io
  io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
}
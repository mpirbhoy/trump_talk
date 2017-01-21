//This contains the routes that the server allows
var fs = require('fs');
var path = require("path");
var express = require('express');
var controller = require('./controller/controller');

module.exports = function(app) {

	//Get request for Home page 
	app.get('/', controller.getHome);	
	
}
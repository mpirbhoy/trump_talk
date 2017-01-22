var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const socketIO = require('socket.io');
const path = require('path');

//Connecting to mongoose
//var dbpath = process.env.MONGODB_URI || 'mongodb://localhost/trumptalk';
//mongoose.connect(dbpath);

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const app = express()
  .use(express.static('public'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

//Serving static files in public directory
var port = process.env.PORT || 3000; //port on Heroku

//Sets up the routes that the server accepts
require('./routes.js')(app);

app.listen(port, function() {
    console.log("Starting Trump talk Chatbot Server at port " + port + "!");
});
var express = require('express');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connecting to mongoose
var dbpath = process.env.MONGODB_URI || 'mongodb://localhost/trumptalk';
mongoose.connect(dbpath);

//Serving static files in public directory
var app = express();
app.use(express.static('public'));
var port = process.env.PORT || 3000; //port on Heroku
app.set('port',port);

//Setting Configurations
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({limit: '5mb'}));
app.use(expressSession({
    secret: 'u of t doesnt rock' ,
    saveUninitialized: true,
    resave: true
}));

//Sets up the routes that the server accepts
require('./routes.js')(app);

app.listen(app.get('port'), function() {
    console.log("Starting Trump talk Chatbot Server at port " + app.get('port') + "!");
});
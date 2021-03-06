var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser')

app.use(bodyParser.json());
// Add our fonts_actions, to save and load fonts, pass in the current root dir:

// Add our routes for the api, pass in the current app, font_actions and the current root dir:
var routes = require('./routes/routes.js')(app, __dirname);

// Open up our dir for the server to see, not always the best idea, but it's easy:
app.use('/',express.static(__dirname + ''));

// Set out server port to run on 8080, or the current env port:
var port_number = http.listen(process.env.PORT || 8080);

// Start our server:
app.listen(port_number);



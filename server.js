// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require ('path');

// Config
var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Routes to html pages
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Listen
app.listen(PORT, function() {
    console.log(require);
    console.log('FriendFinder is listening on PORT: ' + PORT);
  });
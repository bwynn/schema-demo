// modules
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// config
var db = require('./config/db');
var port = process.env.port || 8080;

// connect up
mongoose.connect(db.database);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
require('./routes')(app);

// server
app.listen(port);

console.log("Server up and running on port " + port);

exports = module.exports = app;

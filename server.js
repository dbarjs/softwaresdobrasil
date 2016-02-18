
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://192.168.10.127/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(8080);
console.log('API is running on port 80');

// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Post Test
app.post('/login', function(req, res) {
	console.log('new req');
	console.log(req.body);
	res.end('{}');
});

// Dist
app.use('/dist', express.static(__dirname + '/public_html/dist'));

// Public
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public_html/index.html'));
});

// Start server
app.listen(3000);
console.log('API is runningo on port 3000');

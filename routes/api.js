
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');
var People = require('../models/people');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

People.methods(['get', 'put', 'post', 'delete']);
People.register(router, '/peoples');

// Return router
module.exports = router;
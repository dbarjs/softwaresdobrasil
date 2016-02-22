
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var peopleSchema = new mongoose.Schema({
	name: String,
	age: Number
});

// Return Model
module.exports = restful.model('Peoples', peopleSchema);
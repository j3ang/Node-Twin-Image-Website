var mongoose = require('mongoose');
var Schema = mongoose.Schema

var ProjectSchema = new Schema({
	category: String,
    name: String,
    price: Number,
    cover: String
});

module.exports = mongoose.model("Project", ProjectSchema);
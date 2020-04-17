const mongoose = require('mongoose');
const { Schema } = mongoose; 

const postingModel = new Schema({
    priority: Number, 
    name: String,
    description: String,
    poster: String, 
});

module.exports = { postingModel };
module.exports = mongoose.model('postingModel', postingModel);
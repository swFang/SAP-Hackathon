const mongoose = require('mongoose');
const { Schema } = mongoose; 

const posting = new Schema({
    priority: Number, 
    name: String,
    description: String,
    poster: String,
    contact: String,
    location: {
        lat: Number,
        long: Number,
    },
    date: Date,
    completion: Boolean
});

const tag = new Schema({
    priority: Number, 
    name: String,
    associatedPosts: [posting]
});

postingModel = mongoose.model('posting', posting);
tagModel = mongoose.model('tag', tag);
module.exports = {'postingModel' : postingModel, 'tagModel': tagModel};
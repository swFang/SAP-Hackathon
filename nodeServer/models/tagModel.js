const mongoose = require('mongoose');
const { Schema } = mongoose; 

const posting = new Schema({
    priority: Number, 
    name: String,
    description: String,
    poster: String, 
});

const tag = new Schema({
    priority: Number, 
    name: String,
    associatedPosts: [posting],
    associatedSubTags:[this]
});

postingModel = mongoose.model('posting', posting);
tagModel = mongoose.model('tag', tag);
module.exports = {'postingModel' : postingModel, 'tagModel': tagModel};
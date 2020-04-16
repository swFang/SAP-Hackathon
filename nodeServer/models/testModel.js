const mongoose = require('mongoose');
const { Schema } = mongoose; 

const testSchema = new Schema({
    test: String
});

module.exports = mongoose.model('test', testSchema);
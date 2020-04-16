const express = require('express');
const mongoose = require('mongoose');
const {tagModel, postingModel} = require('./models/tagModel');

mongoose.connect(
    'mongodb://admin:Admin123Admin123@ds137488.mlab.com:37488/rona_helper',
    {useNewUrlParser: true}
).then(() => {
    console.log('Database connected');
})
.catch(err => {
    console.log(err);
});

const app = express(); 

app.get('/', async (req,res) => {
    //res.send({hi:'there'});
    const tag = new testModel({
        priority: 1, 
        name: 'tagname',
        associatedPosts: [],
        associatedSubTags:[]
    });
    await tag.save();
    res.send(tag);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`);
});
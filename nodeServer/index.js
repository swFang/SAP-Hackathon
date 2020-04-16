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
app.get('/posting', (req, res) => {
    const posting = req.query.posting;
    const postingData = await getPostingData(posting);
    res.send(postingData);
});

app.get('/tag', (req, res) => {
    const tag = req.query.tag;
    const tagData = await getTagData(tag);
    res.send(tagData);
});

app.post('/addPosting', (req, res) => {
    const posting = req.query.posting;
    const postingData = await addPostingData(posting);
    res.send(postingData);
});

app.post('/removePosting', (req, res) => {
    const posting = req.query.posting;
    const postingData = await removePostingData(posting);
    res.send(postingData);
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`);
});



function getPostingData(posting) {

};

function getTagData(tag) {

};

function addPostingData(posting) {

};

function removePostingData(posting) {

};
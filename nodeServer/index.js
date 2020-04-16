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
    const tag = new tagModel({
        priority: 1,
        name: 'tagname',
        associatedPosts: [],
        associatedSubTags:[]
    });
    await tag.save();
    res.send(tag);
});

app.get('/getPosting', async (req, res) => {
    const posting = req.query.posting;
    const postingData = await getPostingData(posting);
    res.send(postingData);
});

app.get('/getTag', async (req, res) => {
    const tag = req.query.tag;
    const tagData = await getTagData(tag);
    res.send(tagData);
});

app.post('/addPosting', async (req, res) => {
    const posting = req.body.posting;
    const postingData = await addPostingData(posting);
    res.send(postingData);
});

app.post('/removePosting', async (req, res) => {
    const posting = req.body.posting;
    const postingData = await removePostingData(posting);
    res.send(postingData);
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`);
});



function getPostingData(posting) {
    const postingName = posting.name;
    postingModel
        .find({
            name: postingName
        })
        .then(posting => {
            console.log(posting)
        })
        .catch(err => {
            console.error(err)
        })
};

function getTagData(tag) {
    const tagName = tag.name;
    tagModel
        .find({
            name: tagName
        })
        .then(tag => {
            console.log(tag)
        })
        .catch(err => {
            console.error(err)
        })
};

function addPostingData(posting) {
    posting.save()
        .then(posting => {
            console.log(posting)
        })
        .catch(err => {
            console.error(err)
        })
};

function removePostingData(posting) {
    const postingName = posting.name;
    postingModel
        .findOneAndRemove({
            name: postingName
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.error(err)
        })
};
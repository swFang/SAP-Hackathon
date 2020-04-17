const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
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
app.use(bodyParser.json())


app.get('/', async (req,res) => {
    //res.send({hi:'there'});
    const tag = new testModel({
        priority: 1,
        name: 'tagname',
        associatedPosts: []
    });
    await tag.save();
    res.send(tag);
});

app.get('/posting', async(req, res) => {
    const posting = req.query.posting;
    const postingData = await getPostingData(posting);
    res.send(postingData);
});

app.get('/tag', async (req, res) => {
    const tag = req.query.tag;
    const tagData = await getTagData(tag);
    res.send(tagData);
});

app.post('/addPosting', async (req, res) => {
    const posting = req.body;
    console.log('addposting', posting);
    const postingData = await addPostingData(posting);
    res.send(postingData);
});

app.post('/removePosting', async (req, res) => {
    const posting = req.body;
    console.log('removePosting', posting);
    const postingData = await removePostingData(posting);
    res.send(postingData);
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`);
});



function getPostingData(posting) {
    const postingName = posting.name;
    Posting
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
    Tag
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
    const newPosting = new postingModel(posting);
    newPosting.save()
        .then(posting => {
            console.log(posting)
        })
        .catch(err => {
            console.error(err)
        })
};

function removePostingData(posting) {
    const postingName = posting.name;
    console.log(posting.name);
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
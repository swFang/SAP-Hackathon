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
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });



app.get('/', async (req,res) => {
    res.send({"hi":"there"});
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

app.get('/postsOfTags', async (req, res) => {
    let tag = req.query.tag;
    const tags = await tasksOfTag(tag);
    console.log('api', tags);
    res.status(200).send({"stuff": tags});
});

app.post('/addPosting', async (req, res) => {
    console.log('got requiest for addPOsting!');
    console.log(req.body.tag);
    const posting = req.body.posting;
    const tag = req.body.tag
    console.log(posting);
    console.log(tag);
    const postingData = await addPostingData(posting, tag);
    res.send(postingData);
});

app.post('/addTag', async (req, res) => {
    const tag = req.body;
    const tagData = await addTag(tag);
    res.send(tagData);
});

app.post('/removePosting', async (req, res) => {
    const posting = req.body;
    console.log('removePosting', posting);
    const postingData = await removePostingData(posting);
    res.send(postingData);
});

app.post('/removeTag', async (req, res) => {
    const tag = req.body;
    const postingTag = await removeTagData(tag);
    res.send(postingTag);
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

function addPostingData(posting, tag) {
    const newPosting = new postingModel(posting);
    newPosting.save()
        .then(posting => {
            updateTagWithPosting(tag, posting);
        })
        .catch(err => {
            console.error(err)
        })
};

function addTag(tag) {
    const newTag = new tagModel(tag);
    newTag.save()
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

function removeTagData(tag) {
    const tagName = tag.name;
    console.log(tagName);
    tagModel
        .findOneAndRemove({
            name: tagName
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.error(err)
        })
};

async function updateTagWithPosting(tag, posting) {
    const tagName = tag.name;
    tagModel
        .findOne({
            name: tagName
        })
        .then(tag => {
            tag.associatedPosts.push(posting);
            tag.save();
           // tag.associatedPosts.push(posting);
        })
        .catch(err => {
            console.error(err)
        })
}

async function tasksOfTag(tag) {
    const res = await tagModel.findOne({name: tag});
    console.log(res);
    return res;
}
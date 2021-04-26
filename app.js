const express = require('express');
const app = express();
const router = express.Router();

// setting up and linking pug with nodejs
app.set('view engine', 'pug');
app.set('views', './src/views');
app.get('/', (req,res) => {
    res.render("index");
});
app.get('/reviews', (req, res) => {
    res.render("reviews.pug");
});
app.get('/query_db', (req, res) => {
    res.render("query_db.pug");
});

// ======= Server Operations ======= 

// Connecting to mongodb server

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'Netflix_Reviews';

const client = new MongoClient(url);

client.connect(function(err){
    assert.equal(null, err);
    console.log("Successfully connected to server");

    const db = client.db(dbName);

    // calling function 'getDbStats'
    getDbStats(db, function(){
        client.close();
    });

    // calling function 'findDocuments'
    findDocuments(db, function(){
        client.close();
    });

    // calling function 'createTextIndex'
    createTextIndex(db, function(){
        client.close();
    });

    // calling function 'createValidated'
    createValidated(db, function(){
        client.close();
    });
});

// ---- Additional function to operate on DB ----
// Printing Database Stats

function getDbStats(db, callback){
    db.command({'dbStats': 1}, function(err, results){
        console.log(results);
        callback();
    });
};

// More operations on DB using Projections

function findDocuments(db, callback){
    // get document collection
    const collection = db.collection('Netflix_Shows');
    // find documents
    collection
        .find({'title' : '3%'})
        .project({'country' : 'Brazil'})
        .toArray(function(err, docs){
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);
            callback(docs);
        });
}

// Creating a validated DB Collection --> (used to validated data based on the specified values and its type)

function createValidated(db, callback){
    db.createCollection("users",
            {
                'validator': { '$or':
                [
                    { 'username': {'$type': 'string'}},
                    { 'password': { '$type': 'string'}}
                ]}
            },
        function(err, results){
            console.log("Collection Created");
            callback();
        }
    );
}

// Create a Text Index

function createTextIndex(db, callback){
    const collection = db.collection('users');

    collection.createIndex(
        { comments : "text" }, function(err, result){
            console.log(result);
            callback(result);
    });
};

// Create a Hashed Index

// ==================================

app.listen(3000, () => console.log("Listening on port 3000"));
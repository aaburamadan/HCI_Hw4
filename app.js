const express = require('express');
const app = express();
const router = express.Router();

// Setting up server connection

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { Mongoose } = require('mongoose');

const url = 'mongodb://localhost:27017';

const dbName = 'Netflix_Reviews';

const client = new MongoClient(url);

// ============================

// setting up and linking pug with nodejs
app.set('view engine', 'pug');
app.set('views', './src/views');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res) => {
    res.render("index");
});
app.get('/reviews', (req, res) => {
    res.render("reviews.pug");
});
app.get('/register', (req, res) => {
    res.render("register.pug");
});
app.get('/login', (req, res) => {
    res.render("login.pug");
});

// setup encryption
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.post('/register', async (req, res) => {
    try {
        client.connect(function(err){
            assert.equal(null, err);
            console.log("Successfully connected to server");
        
            const db = client.db(dbName);

            password = req.body.password;
            bcrypt.hash(password, saltRounds, function(err, hash){
                db.collection('users').insertOne({username: req.body.username, password: hash}, function(err, r){
                assert.equal(null, err);
                assert.equal(1, r.insertedCount);
        
                client.close();
            });
            
                console.log(hash);
                bcrypt.compare(password, hash, function(err, result){
                    console.log(result);
                });
            });

      })
      res.redirect('/login')
    } catch {
      res.redirect('/register')
    }
});

// app.post('/login', async (req, res) => {
//     try{
//         client.connect(function(err){
//             assert.equal(null, err);
//             console.log("Successfully connected to server");

//             const db = client.db(dbName);
//             password = req.body.password;
//             bcrypt.compare(password, hash, function(err, result){
//                 console.log(result);
//             });

//         })
//         res.redirect('/');
//     } catch {
//         res.redirect('/login');
//     }
// });



// ======= Setting Up User signup =======

// ======================================


// ======= Server Operations ======= 

// Connecting to mongodb server

// client.connect(function(err){
//     assert.equal(null, err);
//     console.log("Successfully connected to server");

//     const db = client.db(dbName);

//     // Inserting Userdata to collection 'users' using `insertOne` command ()
//     db.collection('users').insertOne({username: "testuser", password: "testpassword"}, function(err, r){
//         assert.equal(null, err);
//         assert.equal(1, r.insertedCount);

//         client.close();
//     });

//     // Inserting Userdata to collection 'users' using `insertOne` command ()
//     // db.collection('users').insertMany([{username: "testuser1", password: "testpassword1"}, {username: "testuser2", password: "testpassword2"}], function(err, r){
//     //     assert.equal(null, err);
//     //     assert.equal(2, r.insertedCount); // set assert.equal 1st parameter set to 2. (set to as many users as you want to input simultanenously)

//     //     client.close();
//     // });

//     // calling function 'getDbStats'
//     getDbStats(db, function(){
//         client.close();
//     });

//     // calling function 'findDocuments'
//     findDocuments(db, function(){
//         client.close();
//     });

//     // calling function 'createTextIndex' (using text function -> for username)
//     // createTextIndex(db, function(){
//     //     client.close();
//     // });

//     // calling function 'createTextIndex' (using hashed function -> for passwords)
//     // createHashedIndex(db, function(){
//     //     client.close();
//     // });

//     // calling function 'createValidated'
//     createValidated(db, function(){
//         client.close();
//     });
// });

// // ---- Additional function to operate on DB ----
// // Printing Database Stats

// function getDbStats(db, callback){
//     db.command({'dbStats': 1}, function(err, results){
//         console.log(results);
//         callback();
//     });
// };

// // More operations on DB using Projections

// function findDocuments(db, callback){
//     // get document collection
//     const collection = db.collection('Netflix_Shows');
//     // find documents
//     collection
//         .find({'title' : '3%'})
//         .project({'country' : 'Brazil'})
//         .toArray(function(err, docs){
//             assert.equal(err, null);
//             console.log("Found the following records");
//             console.log(docs);
//             callback(docs);
//         });
// }

// // Creating a validated DB Collection --> (used to validated data based on the specified values and its type)

// function createValidated(db, callback){
//     db.createCollection("users",
//             {
//                 'validator': { '$or':
//                 [
//                     { 'username': {'$type': 'string'}},
//                     { 'password': {'$type': 'string'}}
//                 ]}
//             },
//         function(err, results){
//             console.log("Collection Created");
//             callback();
//         }
//     );
// }

// // Create a Text Index

// function createTextIndex(db, callback){
//     const collection = db.collection('users');

//     collection.createIndex(
//         { username : "newuser"}, function(err, result){
//             console.log(result);
//             callback(result);
//     });
// };

// // Create a Hashed Index

// function createHashedIndex(db, callback){
//     const collection = db.collection('users');

//     collection.createIndex(
//         { password : "password" }, function(err, result){
//             console.log(result);
//             callback(result);
//         }
//     )
// }

// ==================================

app.listen(3000, () => console.log("Listening on port 3000"));
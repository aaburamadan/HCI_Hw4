const express = require('express');

const config = require('./src/Mongo/config');
//initialize mongodb & connect to server
require('./src/Mongo/mongoose');

const app = express();
app.get("/", function(){
    console.log('GET request');
});


app.listen(config.port, function () {
    console.log("Now listening for requests");
});

/*app.listen(process.env.port || 3000, function(){
    console.log("Now listening for requests");
});*/
const express = require('express');
const app = express();
const router = express.Router();

const { MongoClient } = require("mongodb");

// setting up and linking pug with nodejs
app.set('view engine', 'pug');
app.set('views', './src/views');
app.get('/', (req,res) => {
    res.render("index");
});
app.get('/reviews', (req, res) => {
    res.render("reviews.pug");
})


// setting up and linking mongodb with nodejs

// const uri = "mongodb+srv://karlembeast:HumanComputerInteractions@123@cluster0.o8ben.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

// async function run() {
//     try{
//         await client.connect();

//         const database = client.db('sample_mflix');
//         const movies = database.collection('movies');

//         const query = { title: 'Back to the Future'};
//         const movie = await movies.findOne(query);

//         console.log(movie);
//     } finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);

// ===== 

app.listen(3000, () => console.log("Listening on port 3000"));
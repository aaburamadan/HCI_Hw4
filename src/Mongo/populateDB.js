const mongoose = require('mongoose');
const { Int32 } = require('mongodb');
const Schema = mongoose.Schema;

const MovieReviewsSchema = new Schema({
name : {
type: String,
required: [true, 'Name field is required']
},
rank: {
type: String
},
available: {
type: Boolean,
default: false
}
});

const UserSchema = new Schema(
{
"name": {
type: String,
required: true
},
"email": {
type: String,
required: true,
unique: true
},
"hashedPassword": {
type: String,
required: true
},
"karma points": {
type: Int32,
required: false,
},
"creationDate": {
type: Date,
default: Date.now
}
});

const ReviewSchema = new Schema(
{
"textBody": {
type: String,
required: true
},
"likes": {
type: Int32
},
"dislikes": {
type: String
},
"creationDate": {
type: Date,
default: Date.now
}
});

const Reviews = mogoose.model('Review', ReviewSchema);
module.exports = Reviews;

const Users = mogoose.model('User', UserSchema);
module.exports = Users;

const MovieReviews = mongoose.model('movie_names', MovieReviewsSchema);
module.exports = MovieReviews;
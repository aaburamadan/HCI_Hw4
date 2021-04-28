const mongoose = require('mongoose');
const { Int32 } = require('mongodb');
const Reviews = require('../src/Mongo/populateDB');

const ReviewSchema = new mongoose.Schema(
    {
        textBody: {
            type: String
        },
        likes: {
            type: Int32
        },
        dislikes: {
            type: Int32
        },
        creationDate: {
            type: Date,
            default: Date.now
        }
    });

const review = mongoose.model('Reviews', ReviewSchema);
module.exports = review;
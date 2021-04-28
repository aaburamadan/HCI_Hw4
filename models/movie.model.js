const mongoose = require('mongoose');
const { Int32 } = require('mongodb');

const MovieSchema = new mongoose.Schema(
    {
        show_id: {
            type: String
        },
        type: {
            type: String
        },
        title: {
            type: String
        },
        director: {
            type: String
        },
        cast: {
            type: String
        },
        country: {
            type: String
        },
        date_added: {
            type: String
        },
        release_year: {
            type: Int32
        },
        rating: {
            type: String
        },
        duration: {
            type: String
        },
        listed_in: {
            type: String
        },
        description: {
            type: String
        },
        likes: {
            type: Int32
        },
        dislikes: {
            type: Int32
        }
    });

const show = mongoose.model('Shows', MovieSchema);
module.exports = show;
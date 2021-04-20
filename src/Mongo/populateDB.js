const mongoose = require('mongoose');
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

const MovieReviews = mongoose.model('movie_names', MovieReviewsSchema);

module.exports = MovieReviews;
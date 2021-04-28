const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String, 
        required: true
    },
    karmaPoints: {
        type: Int32,
        required: false,
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", UserSchema);

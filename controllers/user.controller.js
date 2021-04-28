const User = require("../controllers/user.controller.js");
const bcrypt = require('bcrypt');
const { model } = require("mongoose");

async function insert(user){
    user.hashedPassword = bcrypt.hashSync(user.password, 10);
    delete user.password;

    console.log("saving user to DB", user);

    return await new User(user).save();
}

module.exports = {
    insert
}
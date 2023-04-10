const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id:String,
    name:String,
    email:String,
    phone:String
});


module.exports = mongoose.model("user",userSchema);
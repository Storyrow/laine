const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: String,
    roleId: String,
    name: String,
    email: {type: String, index: true, unique: true},
    password: String,
    photo: String,
    bio: String,
    location: {
        country: String,
        city: String,
        longitude: String,
        latitude: String
    },
    followers: Array,
    following: Array,
    lastActive: Date
}, { timestamps: true })

exports.UserModel = mongoose.model("User", UserSchema)
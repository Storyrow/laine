const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    id: String,
    userId: {type: String, index: true},
    groupId: {type: String},
    content: {type: String, index: true, unique: true},
    image: String,
    likes: Array, // likeIds
    comments: Array, // commentIds
    location: {
        country: String,
        city: String,
        longitude: String,
        latitude: String
    },
    isPrivate: Boolean,
}, { timestamps: true })

exports.PostModel = mongoose.model("Post", PostSchema)
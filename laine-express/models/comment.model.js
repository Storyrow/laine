const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    id: String,
    userId: {type: String},
    postId: {type: String},
    content: {type: String},
    likes: Array, // userIds
    replies: Array, // commentIds
}, { timestamps: true })

exports.CommentModel = mongoose.model("Comment", CommentSchema)
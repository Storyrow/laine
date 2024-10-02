const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    id: String,
    senderId: {type: String}, // userId
    receiverId: {type: String}, // userId
    message: {type: String},
}, { timestamps: true })

exports.MessageModel = mongoose.model("Message", MessageSchema)
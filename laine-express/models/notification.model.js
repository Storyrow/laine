const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
    id: String,
    userId: String,
    title: String,
    content: String,
    isRead: Boolean,
    createdBy: String
}, { timestamps: true })

exports.NotificationModel = mongoose.model("Notification", NotificationSchema)
const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
    id: String,
    name: {type: String, index: true, unique: true},
    description: String,
    adminIds: Array, // userIds
    memberIds: Array, // userIds
}, { timestamps: true })

exports.GroupModel = mongoose.model("Group", GroupSchema)
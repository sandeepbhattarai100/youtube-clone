const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,

    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    tags: {
        type: [string],
        default: [],
    },
    likes: {
        type: [string],
        default: [],
    },
    dislikes: {
        type: [string],
        default: [],
    }


}, { timeStamps: true });

module.exports = mongoose.model('Video', VideoSchema);

const User = require('../models/User.model');
const createError = require('../utils/createError');
const Video = require('../models/Video.model');
const Comment = require('../models/Comments.model');

const addComment = async (req, res, next) => {
    try {
        const comment = await Comment.create({
            ...req.body,
            userId: req.user.id
        });
        res.status(200).json(comment);

    } catch (err) {
        next(err);

    }
};

const deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id);
        const video = await Video.findById(req.params.id);
        if (req.user.id === comment.userId || req.user.id === video.userId) {
            const comment = await Comment.findByIdAndDelete(req.params.id);
            res.status(200).json("comment deleted successfully");

}

} catch (err) {
    next(err);

    };

 };
const getComment = async (req, res, next) => {
    try {
        const comments = await Comment.find({
            videoId: req.params.videoId
        });
        res.status(200).json(comments);

    } catch (err) {
        next(err);

    }
};


module.exports = { addComment, deleteComment, getComment };
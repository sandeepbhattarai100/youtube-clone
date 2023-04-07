const mongoose = require('mongoose');
const createError = require('../utils/createError');
const Video = require('../models/Video.model');
const User = require('../models/User.model');
const AddVideo = async (req, res, next) => {
    try {
        const newVideo = await Video.create({ userId: req.user.id, ...req.body });
        res.status(200).json(
            newVideo);
    } catch (err) {
        next(err);
    }
};
const updateVideo = async (req, res, next) => {
    try {
        const findVideo = await Video.findById(req.params.id);
        if (!findVideo) return next(createError(404, "video is not available in the database"));
        if (req.user.id === findVideo.userId) {
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },
                { new: true });
            res.status(200).json(updatedVideo);
        }
        else {
            return next(createError(403, "you cannot update this video"))
        }
    } catch (err) {
        next(err);
    }
};
const deleteVideo = async (req, res, next) => {
    try {
        const deletedVideo = await Video.findByIdAndDelete(req.params.id);
        res.status(200).json("video deleted successfully");
    } catch (err) {
        next(err);
    }
};
const getVideo = async (req, res, next) => {
    try {
        const findVideo = await Video.findById(req.params.id);
        if (findVideo) {
            res.status(200).json(findVideo);
        }
        else {
            res.status(404).json("there is no video in database");
        }
    } catch (err) {
        next(err);
    }
};
const addView = async (req, res, next) => {
    await Video.findByIdAndUpdate(req.params.id, {
        $inc: { views: 1 },
    });
    res.status(200).json("views increased successfully");
};
const trend = async (req, res, next) => {
    try {
        const video = await Video.find().sort({ views: -1 });
        res.status(200).json(video);
    } catch (err) {
        next(err);
    }
};
 const random = async (req, res, next) => {
    try {
      const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
      res.status(200).json(videos);
    } catch (err) {
      next(err);
    }
  };
//subscribed channels ko video

const subchannels = async (req, res, next) => {
    const user = await User.findById(req.user.id);
    const subscribedChannels = user.subscribedChannels;
    const list = await Promise.all(subscribedChannels.map(async (channelId) => {
        return await Video.find({ userId: channelId });
    }));
    res.status(200).json(list.flat());
};

const byTags = async (req, res, next) => {
    try {
        const tags = req.query.tags.split(",");
        const videos = await Video.find({ tags: { $in: tags } }).limit(20);
        res.status(200).json(videos);

    } catch (err) {
        next(err);
    }
};

const search = async (req, res, next) => {
    const query = req.query.q;
    try {
        const video = await Video.find({
            title: { $regex: query, $options:"i" },
        }).limit(40);
        res.status(200).json(video);

    } catch (err) {
        next(err);

    }

};
module.exports = { AddVideo, updateVideo, deleteVideo, getVideo, addView, trend, random, subchannels, byTags, search };
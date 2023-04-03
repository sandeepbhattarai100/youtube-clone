const mongoose = require('mongoose');
const { create } = require('../models/User.model');
const User = require('../models/User.model');
const createError = require('../utils/createError');
const updateUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },
                { new: true });
            res.status(200).json(updatedUser)
        } catch (err) {
            next(err);
        }
    }
    else {
        next(createError(403, "you are not authorized to update"));
    }
};
const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            res.json({
                message: "user deleted success fullt=y",
                deleteUser
            });
        } catch (err) {
            next(err);
        }
    }
    else {
        return next(createError(401, "you are not authorized to delete"));
    }
};
const getUser = async (req, res, next) => {
    try {
        const findUser = await User.findById(req.params.id);
        console.log(findUser);
        res.status(200).json(findUser);
    } catch (err) {
        next(err);
    }
};
const subscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $push: { subscribedChannels: req.params.id }
        });
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: 1 }
        });
        res.status(200).json('subscription successful');
    } catch (err) {
        next(err);

    }
};
const unsubscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull: { subscribedChannels: req.params.id }
        });
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: -1 }
        });
        res.status(200).json("Unsubscribe successful");

    } catch (err) {
        next(err);

    }
};
const like = async (req, res, next) => { };
const dislike = async (req, res, next) => { };
module.exports = { updateUser, deleteUser, getUser, subscribe, unsubscribe, like, dislike };
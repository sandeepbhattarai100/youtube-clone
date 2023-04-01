const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required:true,
    },
    img: {
        type:String,
    },
    subscribers: {
        type: Number,
        default:0,
    },
    subscribedChannels: {
    type:[String]
}

},{timeStamps:true});

module.exports = mongoose.model('User', UserSchema);

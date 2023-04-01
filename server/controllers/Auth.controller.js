const mongoose = require('mongoose');
const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const createUser = async (req, res, next) => {

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash,
        });
        return res.status(200).send("new user created successfully");


        } catch (err) {
        next(err);

}


};

module.exports = { createUser };
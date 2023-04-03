const mongoose = require('mongoose');
const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const createError = require('../utils/createError');
const jwt = require('jsonwebtoken');
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

const login = async (req, res, next) => {
  const { name } = req.body;
  try {
    const user = await User.findOne(name);
    console.log(user);
    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return next(createError(400, "Wrong Credentials!"));

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    const { password, ...others } = user._doc;

    res.cookie("access_token", token, {
      httpOnly: true,
    })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};

module.exports = { createUser, login };
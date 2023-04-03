const express = require('express');

const router = express.Router();
const {createUser,login}=require('../controllers/Auth.controller');
const { verifyToken } = require('../utils/verifyToken');

router.post('/createuser',createUser);
router.post('/login',login);


module.exports = router;

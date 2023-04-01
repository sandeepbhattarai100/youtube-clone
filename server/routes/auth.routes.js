const express = require('express');
const router = express.Router();
const {createUser}=require('../controllers/Auth.controller')

router.post('/createuser',createUser);


module.exports = router;

const express = require('express');
const { updateUser, deleteUser, getUser, subscribe,unsubscribe } = require('../controllers/User.controller');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

//routes
router.get('find/:id', getUser);

router.put('/:id', verifyToken, updateUser);

router.delete('find/:id', verifyToken, deleteUser);
router.put('/sub/:id',verifyToken, subscribe);
router.put('/unsub/:id',verifyToken, unsubscribe);



module.exports = router;

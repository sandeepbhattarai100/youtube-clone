const express = require('express');
const { updateUser, deleteUser, getUser, subscribe, unsubscribe, dislike, like } = require('../controllers/User.controller');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

//routes

router.delete('find/:id', verifyToken, deleteUser);
router.put('/sub/:id', verifyToken, subscribe);
router.put('/unsub/:id', verifyToken, unsubscribe);
router.put('/like/:videoId', verifyToken, like);
router.put('/dislike/:id', verifyToken, dislike);
router.put('/:id', verifyToken, updateUser);
router.get('/:id', getUser);



module.exports = router;

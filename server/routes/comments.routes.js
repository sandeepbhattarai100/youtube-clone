const verifyToken = require("../utils/verifyToken");
const express = require('express');
const router = express.Router();
const { addComment, getComment, deleteComment } = require('../controllers/comments.controller');

router.post('/', verifyToken, addComment)
router.get('/:videoId', getComment)
router.delete('/:id', verifyToken, deleteComment)

module.exports = router;


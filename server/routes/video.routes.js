const express = require('express');
const { AddVideo, updateVideo, deleteVideo, getVideo,addView } = require('../controllers/video.controller');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

router.post('/', verifyToken, AddVideo);
router.put('/:id', verifyToken, updateVideo);
router.delete('/:id', verifyToken, deleteVideo);
router.get('/:id',getVideo);
router.put('/view/:id',addView);

module.exports = router;
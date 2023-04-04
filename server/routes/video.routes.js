const express = require('express');
const { AddVideo, updateVideo, deleteVideo, getVideo, addView, trend,random,subchannels,byTags,search} = require('../controllers/video.controller');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

router.post('/', verifyToken, AddVideo);
router.put('/view/:id', addView);
router.get('/trend', trend);
router.get('/random', random);
router.get('/sub', verifyToken,subchannels);

router.get('/search', search);
router.get('/tags', byTags);

router.put('/:id', verifyToken, updateVideo);
router.delete('/:id', verifyToken, deleteVideo);
router.get('/:id', getVideo);

module.exports = router;
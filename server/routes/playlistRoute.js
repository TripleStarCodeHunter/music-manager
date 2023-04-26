const express=require('express')
const router = express.Router();
const {getPlaylist,insertPlaylist} = require('../controller/playlistController')

router.get('/getPlaylist', getPlaylist);
router.get('/insertPlaylist', insertPlaylist);

module.exports=router;
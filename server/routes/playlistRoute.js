const express=require('express')
const router = express.Router();
const {getPlaylist,insertPlaylist,deletePlaylist} = require('../controller/playlistController')

router.get('/getPlaylist', getPlaylist);
router.get('/insertPlaylist', insertPlaylist);
router.delete('/deletePlaylist', deletePlaylist);

module.exports=router;
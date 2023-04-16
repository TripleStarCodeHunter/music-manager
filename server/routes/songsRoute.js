const express=require('express')
const router = express.Router();
const {getSongs} = require('../controller/songsController')

router.get('/getSongs', getSongs);

module.exports=router;
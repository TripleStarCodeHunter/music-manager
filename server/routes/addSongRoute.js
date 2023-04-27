const express=require('express')
const router = express.Router();
const { createUser } = require('../controller/addSong');

router.post('/addsong', createUser);

module.exports=router;
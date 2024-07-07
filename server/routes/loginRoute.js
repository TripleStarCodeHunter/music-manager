const express=require('express')
const router = express.Router();
const { createlogin } = require('../controller/login');
router.post('/login', createlogin);
module.exports=router;
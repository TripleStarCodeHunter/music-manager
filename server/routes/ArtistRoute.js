const express=require('express')
const router = express.Router();
const formidable = require('express-formidable')
// const { createlogin } = require('../controller/login');
const {Artist} = require('../controller/Artist')
router.use(formidable())
// router.post('/login', createlogin);
// 
router.get('/artist/:id',Artist)
module.exports=router
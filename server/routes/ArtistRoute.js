const express=require('express')
const router = express.Router();
const formidable = require('express-formidable')
const {Artist} = require('../controller/Artist')
router.use(formidable())
router.get('/artist/:id?',Artist)
module.exports=router
const express=require('express')
const router = express.Router();
const { createUser } = require('../controller/loginController');

router.post('/register', createUser);

module.exports=router;
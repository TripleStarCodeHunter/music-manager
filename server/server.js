const mysql2 =require('mysql2');
const express =require('express');
const cors =require('cors');

const registerRoute = require('./routes/registerRoute.js');
const loginRoute = require('./routes/loginRoute')
const songsRoute = require('./routes/songsRoute.js')
const playlistRoute=require('./routes/playlistRoute.js')

const connection=require('./database_connection.js')
const Artistrender = require('./routes/ArtistRoute.js')

const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded())


connection.connect((err)=>{ 
    if (err) throw err ;
    console.log("connected")
})

app.use('/',registerRoute);
app.use('/',loginRoute)
app.use('/',Artistrender)
app.use('/',songsRoute)
app.use('/',playlistRoute)

app.listen(PORT,()=>console.log('app is running'))

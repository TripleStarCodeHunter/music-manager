import mysql2 from 'mysql2';
import express from 'express';
import cors from 'cors';


const connection = mysql2.createConnection({
    host:"localhost",
    database:"music_db",
    user:"root",
    password:"mysql"
})

const app = express()
const PORT = 5000
app.use(express.json())
app.use(cors())

connection.connect((err)=>{
    if (err) throw err ;
    console.log("connected")
})



app.post('/',(req,res)=>{
    const sql = 'select * from users where username=? and password=?';
    connection.query(sql,[req.body.username,req.body.password],(err,data)=>{
        if (err) {return connection.end();res.json('Error');}
        if (data.length) {
            return res.render('homepage')
        }
        else{
            connection.end()
            return res.json("no record")
        }
    })
})


app.get('/homepage',(req,res)=>{
    console.log('hello')
    res.render(path.join
        ('C:/Tinku/divy/music_management/music-manager/frontend/src/homepage.js'))
})

app.listen(PORT,()=>console.log('app is running'))
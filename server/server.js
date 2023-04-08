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
app.use(express.urlencoded())

connection.connect((err)=>{
    if (err) throw err ;
    console.log("connected")
})



app.post('/',(req,res)=>{
    const sql = 'select * from users where username=? and password=?';
    connection.query(sql,[req.body.username,req.body.password],(err,data)=>{
        if (err) {return connection.end();res.json('Error');}
        if (data.length) {
            return res.json('logged in')
        }
        else{
            // connection.end()
            return res.json("no record")
        }
    })
    // console.log(req.body.username,req.body.password)
})

// app.get('/',(req,res)=>res.render('index.js'))

app.post('/',(req,res)=>{
    const obj = req.body 
    const sql = 'select * from users where username=? '
    connection.query(sql,[obj.username],(err,data)=>{
        if (err) return res.json('error')
        if (data.length) return res.json('data already exist')
        else{
            const ins_sql = 'insert into users set ? '
            connection.query(ins_sql,{username : obj.username,password : obj.password,email : obj.email,phone : (obj.phone)},(err,data)=>{
                if (err) throw err ;
                else return res.json(data.affectedRows  )
                // console.log(obj.username)
            })
        }
    })
})


app.listen(PORT,()=>console.log('app is running'))


// create table users ( username varchar(50) primary key , 
// 	password varchar(50) not null , 
//     email varchar(50) not null , 
//     phone int(10) check (phone regexp '\d{3}\d{3}\d{4}$')
// )
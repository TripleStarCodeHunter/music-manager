const connection = require('../database_connection')

exports.createlogin = (req,res) =>{
    const sql = 'select * from users where username=? and password=?';
    connection.query(sql,[req.body.username,req.body.password],(err,data)=>{
        if (err) {return res.json('Error');}
        if (data.length) {
            const username = data[0].username;
            return res.json({ success: true, username: username });
        }
        else{
            // connection.end()
            return res.json("no record")
        }
    })
}

// app.post('/',(req,res)=>{
//     const sql = 'select * from users where username=? and password=?';
//     connection.query(sql,[req.body.username,req.body.password],(err,data)=>{
//         if (err) {return connection.end();res.json('Error');}
//         if (data.length) {
//             return res.json('logged in')
//         }
//         else{
//             // connection.end()
//             return res.json("no record")
//         }
//     })
//     // console.log(req.body.username,req.body.password)
// })
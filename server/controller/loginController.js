const connection = require('../database_connection');

exports.createUser=(req,res)=>{
    const obj = req.body 
    const sql = 'select * from users where username=? '
    // console.dir(url.parse(req.url))
    // console.log(req.route.path)
    connection.query(sql,[obj.username],(err,data)=>{
        if (err) return res.json('error')
        if (data.length) return res.json('data already exist')
        else{
            const ins_sql = 'insert into users set username=? , password = ? , email=? , phone=?'
            connection.query(ins_sql,[obj.username,obj.password,obj.email,parseInt(obj.phone)],(err,data)=>{
                if (err) throw err ;
                else return res.json(data.affectedRows  )
                // console.log(obj.username)
            })
        }
    })
}   
const connection = require('../database_connection');

exports.createUser=(req,res)=>{
    const obj = req.body 
    const sql = 'select * from playlist where username=? and song_id=? '
    console.log(obj)
    // console.dir(url.parse(req.url))
    // console.log(req.route.path)
    connection.query(sql,[obj.username,obj.id],(err,data)=>{
        if (err) return res.json('error')
        if (data.length) {
            console.log('hello')
            return res.json('data already exist')}
        // return res.json('ehllo')
        else{
            const ins_sql = 'insert into playlist set song_id=? , username=? '
            connection.query(ins_sql,[obj.id,obj.username],(err,data)=>{
                if (err) throw err ;
                else return res.json(data.affectedRows  )
                // console.log(obj.username)
            })
        }
    })
}
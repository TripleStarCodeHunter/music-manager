const connection = require('../database_connection')



exports.Artist = async (req,res) =>{
    const artist = req.params.id;
    const sql = `
    select * from songs 
join artist on 
artist.artist_id = ${artist} and songs.artist_id = ${artist};
    ;


    `;
    connection.query(sql,(err,data)=>{
        if (err) {return res.json('Error');}
        else{
            
             res.json(data)
        }
    })
}

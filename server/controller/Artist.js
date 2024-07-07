const connection = require("../database_connection");

exports.Artist = async (req, res) => {
    let sql;
    if (req.params.id) {
        const artist = req.params.id;
        sql = `
            SELECT * FROM songs 
            JOIN artist ON artist.artist_id = ${artist} AND songs.artist_id = ${artist};
        `;
    } else {
        
        sql = `
            SELECT * FROM artist;
        `;
    }

    connection.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching artists:", err);
            return res.status(500).json({ error: "Error fetching artists" });
        } else {
            res.json(data);
        }
    });
};

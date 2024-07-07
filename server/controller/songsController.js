const connection = require('../database_connection')

exports.getSongs=(req, res) => {
    connection.query('select songs.song_id,songs.song_name,songs.img , artist.name as artist_name from songs,artist where songs.artist_id = artist.artist_id ORDER BY RAND();', (error, results) => {

    //connection.query('SELECT * FROM songs', (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error retrieving data from database');
      } else {
        res.json(results);
      }
    });
  };

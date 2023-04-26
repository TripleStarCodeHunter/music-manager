const connection = require('../database_connection')

exports.getSongs=(req, res) => {
    connection.query('SELECT songs.*, artist.name AS artistName FROM songs INNER JOIN artist ON songs.artist_id = artist.artist_id ORDER BY RAND();', (error, results) => {

    //connection.query('SELECT * FROM songs', (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error retrieving data from database');
      } else {
        res.json(results);
      }
    });
  };

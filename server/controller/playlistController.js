const connection = require('../database_connection')

exports.getPlaylist=(req, res) => {
    const username = req.query.username;
    const sql='SELECT songs.*, artist.name as artistName FROM songs INNER JOIN playlist ON songs.song_id=playlist.song_id INNER JOIN artist ON songs.artist_id=artist.artist_id WHERE playlist.username=?';
    connection.query(sql, 
    [username],
    (error, results) => {

    //connection.query('SELECT * FROM songs', (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error retrieving data from database');
      } else {
        res.json(results);
      }
    });
  };


  exports.insertPlaylist=(req, res) => {
    const username = req.query.username;
    const song_id = req.query.song_id;
    const sql='INSERT INTO playlist VALUES(?,?)';
    connection.query(sql, 
    [song_id,username],
    (error, results) => {

    //connection.query('SELECT * FROM songs', (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error retrieving data from database');
      } else {
        res.json(results);
      }
    });
  };

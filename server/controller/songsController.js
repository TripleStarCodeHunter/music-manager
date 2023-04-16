const connection = require('../database_connection')

exports.getSongs=(req, res) => {
    console.log("GEE")
    connection.query('SELECT * FROM songs', (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error retrieving data from database');
      } else {
        console.log(results)
        res.json(results);
      }
    });
  };
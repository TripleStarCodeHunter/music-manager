const mysql2 = require('mysql2');

  const connection = mysql2.createConnection({
    host: "b8ltbm14xuveyk5eoj6s-mysql.services.clever-cloud.com",
    port: "3306",
    database: "b8ltbm14xuveyk5eoj6s",
    user: "uranvbsfni4zfweq",
    password: "7aFW11aIbORPZ8uFfAz1"
  });
  
module.exports=connection;


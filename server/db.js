const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword",
  database: "dishes"
});

connection.connect();

module.exports = {
  find: (queryString, callback) => {
    connection.query(queryString, function(error, result) {
      if (error) {
        callback(error);
      }
      callback(null, result);
    });
  }
};

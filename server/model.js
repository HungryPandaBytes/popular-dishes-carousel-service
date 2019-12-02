const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword",
  database: "dishes"
});

connection.connect();

module.exports = {
  PopularDishes: {
    get: callback => {
      connection.query("SELECT * FROM popularDishes", function(error, result) {
        if (error) {
          callback(error);
        }
        callback(null, result);
      });
    },
    create: (fakerObj, callback) => {
      var query =
        "INSERT INTO popularDishes (dish_name, top_dish_photo, photo_count, review_count) values ('pho', 'url', 23, 45);";
      connection.query(query, function(error, result) {
        if (error) {
          console.log(error);
        }
        console.log(result);
      });
    }
  }
};

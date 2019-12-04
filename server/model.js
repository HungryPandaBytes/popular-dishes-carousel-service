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
    get: (restaurantID, callback) => {
      connection.query(
        `SELECT * FROM popularDishes WHERE 'restaurant_id' = ${restaurantID}`,
        function(error, result) {
          if (error) {
            callback(error);
          }
          callback(null, result);
        }
      );
    },
    create: (fakerObj, callback) => {
      var query = `INSERT INTO popularDishes (dish_id, dish_name, top_dish_photo, restaurant_id) values (${fakerObj.dish_id}, '${fakerObj.dish_name}', '${fakerObj.reviewer_photo}', '${fakerObj.restaurant_id}');`;
      connection.query(query, function(error, result) {
        if (error) {
          console.log(error);
        }
        console.log(result);
      });
    }
  },
  Restaurants: {
    create: (fakerObj, callback) => {
      var query = `INSERT INTO restaurant (restaurant_id, restaurant_name) values (${fakerObj.restaurant_id}, '${fakerObj.restaurant_name}');`;
      connection.query(query, function(error, result) {
        if (error) {
          console.log(error);
        }
      });
    }
  }
};

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "student",
  password: "student",
  database: "dishes"
});

connection.connect();

module.exports = {
  PopularDishes: {
    get: (restaurantID, callback) => {
      connection.query(
        `SELECT * FROM popularDishes WHERE restaurant_id = ${restaurantID}`,
        function(error, result) {
          if (error) {
            callback(error);
          }
          callback(null, result);
        }
      );
    },
    create: (fakerObj, callback) => {
      var query = `INSERT INTO popularDishes (dish_name, dish_photo_url, restaurant_id) values ('${fakerObj.dish_name}', '${fakerObj.dish_photo_url}','${fakerObj.restaurant_id}');`;
      connection.query(query, function(error, result) {
        if (error) {
          console.log(error);
        }
        console.log(result);
        callback(null, result);
      });
    }
  },
  Photo: {
    get: (restaurantID, callback) => {
      connection.query(
        `SELECT * FROM photos WHERE restaurant_id = ${restaurantID}`,
        function(error, result) {
          if (error) {
            callback(error);
          }
          callback(null, result);
        }
      );
    }
  },
  Restaurants: {
    create: (fakerObj, callback) => {
      var query = `INSERT INTO restaurants (restaurant_name) value ('${fakerObj.restaurant_name}');`;
      connection.query(query, function(error, result) {
        if (error) {
          console.log(error);
        }
        console.log(result);
        callback(null, result);
      });
    }
  },
  PopularDishesPhoto: {
    create: (fakerObj, callback) => {
      var query = `INSERT INTO photos (photo_text, dish_id, photo_url, restaurant_id) values ('${fakerObj.photo_text}', '${fakerObj.dish_id}', '${fakerObj.photo_url}', '${fakerObj.restaurant_id}');`;
      connection.query(query, function(error, result) {
        if (error) {
          console.log(error);
        }
        console.log(result);
        callback(null, result);
      });
    }
  }
};

// join three tables based on restaurant_id
// `SELECT *
// FROM restaurants
// JOIN photos ON (restaurants.restaurant_id = photos.restaurant_id)
// JOIN popularDishes ON (restaurants.restaurant_id = popularDishes.restaurant_id)
// WHERE restaurants.restaurant_id = ${restaurantID}
// LIMIT 5;
// `

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
      var query = `INSERT INTO popularDishes (dish_id, dish_name, top_dish_photo) values (${fakerObj.dish_id}, '${fakerObj.dish_name}', '${fakerObj.reviewer_photo}');`;
      connection.query(query, function(error, result) {
        if (error) {
          console.log(error);
        }
        console.log(result);
      });
    }
  },
  PopularDishesReview: {
    create: (fakerObj, callback) => {

      var query = `INSERT INTO reviews (dish_id, reviewer_name, review_date, review_text) values (${fakerObj.dish_id}, '${fakerObj.reviewer_name}', '${fakerObj.review_date}', '${fakerObj.review_text}');`;
      connection.query(query, function(error, result) {
        if (error) {
          console.log(error);
        }
      });
    }
  }
};

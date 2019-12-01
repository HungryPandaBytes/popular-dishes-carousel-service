const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword",
  database: "dishes"
});

connection.connect();

// query test
var query =
  "INSERT INTO popular-dishes (dish_name, top_dish_photo, photo_count, review_count ) values (review.dish_name, review.dish_photo, review.photo_count, review.review_count)";
connection.query(query, function(error, result) {
  if (error) {
    console.log(error);
  }
  console.log(result);
});

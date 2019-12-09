// SERVER ENTRY POINT ============================================================================

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PopularDishesController } = require("./controller.js");
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES ========================================================================================

// get the top dishes of a restaurant
app.get("/api/popular-dishes/:restaurant_id", function(req, res) {
  PopularDishesController.get(req, res);
});

// get all popular dishes from all restaurants
app.get("/api/popular-dishes/", function(req, res) {
  // PopularDishes.get(req, res);
});

app.listen(port, () => console.log(`Homiezz, listening on port ${port}`));

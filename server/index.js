// SERVER ENTRY POINT ============================================================================

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { PopularDishesController, PhotoController } = require("./controller.js");
const port = 3004;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES ========================================================================================

// get the top dishes of a restaurant
app.get("/api/popular-dishes/:restaurant_id", function(req, res) {
  PopularDishesController.get(req, res);
});

// get photos and caption
app.get("/api/photos/:restaurant_id", function(req, res) {
  PhotoController.get(req, res);
});

// serve static files
app.use(express.static("./client/dist"));

// get photos and caption
app.get("/:restaurant_id", function(req, res) {
  PhotoController.get(req, res);
});

// serve static files ( need to fix this )
app.use("/:restaurant_id", express.static("./client/dist"));

app.listen(port, () => console.log(`Homiezz, listening on port ${port}`));

// Server Entry Point ====================================

const express = require("express");
const app = express();
const faker = require("faker");
const { PopularDishes } = require("./controller.js");
const port = 3001;

// test with 'hello world'
app.get("/", function(req, res) {
  res.send("hello world");
});

// handle all the get requests to display data
app.get("/api/popular-dishes", function(req, res) {
  PopularDishes.get(req, res);
});

app.listen(port, () => console.log(`Homiezz, listening on port ${port}`));

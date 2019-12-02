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

var review = {
  dish_name: faker.lorem.words(),
  reviewer_name: faker.name.findName(),
  reviewer_photo: faker.image.avatar(),
  review_date: faker.date.recent(),
  review_text: faker.lorem.paragraph()
};

// handle all the get requests to display data
app.get("/api/create/popular-dishes", () => {
  for (var i = 0; i < 120; i++) {
    PopularDishes.create(review, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  }
});

// handle all the post requests to display data
app.post("/api/popular-dishes", function(req, res) {
  PopularDishes.create(req, res);
});

app.listen(port, () => console.log(`Homiezz, listening on port ${port}`));

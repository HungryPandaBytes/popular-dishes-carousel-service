// Server Entry Point ====================================

const express = require("express");
const app = express();
const faker = require("faker");
const port = 3001;

// test with 'hello world'
app.get("/", function(req, res) {
  res.send("hello world");
});

app.get("/api", function(req, res) {
  res.json([
    {
      dish_name: faker.lorem.words(),
      reviewer_photo: faker.image.abstract(),
      review_count: Math.floor(Math.random() * 200),
      photo_count: Math.floor(Math.random() * 100)
    }
  ]);
});

app.listen(port, () => console.log(`Homiezz, listening on port ${port}`));

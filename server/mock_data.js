const { PopularDishes, PopularDishesReview } = require("./model.js");
var faker = require("faker");

for (var i = 0; i < 100; i++) {
  var dish_id = Math.floor(Math.random() * 100000);

  var dish = {
    dish_id: dish_id,
    dish_name: faker.lorem.words(),
    reviewer_photo: faker.image.abstract()
  };

  PopularDishes.create(dish, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
  PopularDishes.get((err, data) => {
    if (err) {
      console.log(err);
    } else {
      data.forEach(dish => {
        var review = {
          dish_id: dish.dish_id,
          reviewer_name: faker.name.findName(),
          reviewer_photo: faker.image.avatar(),
          review_date: faker.date.recent(),
          review_text: faker.lorem.paragraph()
        };
        PopularDishesReview.create(review, (err, data) => {
          if (err) {
            res.send(err);
          } else {
          }
        });
      });
    }
  });
}

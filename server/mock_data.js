const { PopularDishes, PopularDishesReview } = require("./model.js");
var faker = require("faker");

var review = {
  reviewer_name: faker.name.findName(),
  reviewer_photo: faker.image.avatar(),
  review_date: faker.date.recent(),
  review_text: faker.lorem.paragraph()
};

var dish = {
  dish_id: Math.floor(Math.random() * 120),
  dish_name: faker.lorem.words(),
  reviewer_photo: faker.image.abstract()
};

console.log("this script is running");

PopularDishes.create(dish, (err, data) => {
  if (err) {
    res.send(err);
  } else {
    res.send(data);
    
    review.dish_id = dish.dish_id;

    PopularDishesReview.create(review, (err, data) => {
      if (err) {
        res.send(err);
      } else {
      }
    });
  }
});

PopularDishesReview.create(review, (err, data) => {
  if (err) {
    res.send(err);
  } else {
    res.send(data);
  }
});

// SEEDING DB ==============================================================================================

const { PopularDishes, Restaurants } = require("./model.js");
var faker = require("faker");

// seeding db with 100 restaurants & each restaurant has 10 top dishes
for (var i = 0; i < 20; i++) {
  var restaurant_id = Math.floor(Math.random() * 1000);
  var restaurant = {
    restaurant_id: restaurant_id,
    restaurant_name: faker.company.companyName()
  };

  for (var i = 0; i < 10; i++) {
    var dish_id = Math.floor(Math.random() * 1000000);
    var dish = {
      dish_id: dish_id,
      dish_name: faker.lorem.words(),
      reviewer_photo: faker.image.food()
    };
  }

  PopularDishes.create(dish, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });

  Restaurants.create(restaurant, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
  // populating the reviews table in MySQL
  // PopularDishes.get((err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     data.forEach(dish => {
  //       var review = {
  //         dish_id: dish.dish_id,
  //         reviewer_name: faker.name.findName(),
  //         reviewer_photo: faker.image.avatar(),
  //         review_date: faker.date.recent(),
  //         review_text: faker.lorem.paragraph()
  //       };
  //       PopularDishesReview.create(review, (err, data) => {
  //         if (err) {
  //           res.send(err);
  //         } else {
  //         }
  //       });
  //     });
  //   }
  // });
}

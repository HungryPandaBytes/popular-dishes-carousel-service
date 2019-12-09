// SEEDING DB ==============================================================================================

const {
  PopularDishes,
  Restaurants,
  PopularDishesPhoto
} = require("./model.js");
var faker = require("faker");

// seeding db with 100 restaurants & each restaurant has 10 top dishes
for (var i = 1; i < 3; i++) {
  var restaurant = {
    restaurant_name: faker.company.companyName()
  };

  Restaurants.create(restaurant, (err, data) => {
    console.log("It's seeding the restaurants table right now");
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

  for (var j = 0; j < 10; j++) {
    var dish = {
      dish_name: faker.lorem.words(),
      dish_photo_url: faker.image.food(),
      restaurant_id: i
    };

    PopularDishes.create(dish, (err, data) => {
      console.log("it's seeding the popular dishes table");
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
  var random_photo_count = Math.floor(Math.random() * 5);
  for (var k = 0; k < random_photo_count; k++) {
    var photo = {
      photo_text: faker.lorem.words(),
      photo_url: faker.image.food(),
      restaurant_id: i
    };
    PopularDishesPhoto.create(photo, (err, data) => {
      console.log("it's seeding the photo table");
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
}

// SELECT *
// FROM restaurants
// JOIN photos ON (restaurants.restaurant_id = photos.restaurant_id)
// JOIN popularDishes ON (restaurants.restaurant_id = popularDishes.restaurant_id)

// select restaurants.*, photos.*, popularDishes.*  from restaurants, photos, popularDishes where restaurants.restaurant_id = photos.restaurant_id

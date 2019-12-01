var faker = require("faker");

var review = {
  dish_name: faker.lorem.words(),
  reviewer_name: faker.name.findName(),
  reviewer_photo: faker.image.avatar(),
  review_date: faker.date.recent(),
  review_text: faker.lorem.paragraph()
};

var dish = {
  dish_name: faker.lorem.words(),
  reviewer_photo: faker.image.abstract(),
  review_count: Math.floor(Math.random() * 200),
  photo_count: Math.floor(Math.random() * 100)
};

console.log(book);

modules.export.review = review;
modules.export.dish = dish;

const { PopularDishes, Photo } = require("./model.js");

module.exports = {
  PopularDishesController: {
    get: (req, res) => {
      PopularDishes.get(req.params.restaurant_id, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      });
    },
    create: (req, res) => {
      PopularDishes.create(req.body, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      });
    }
  },
  PhotoController: {
    get: (req, res) => {
      Photo.get(req.params.restaurant_id, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      });
    }
  }
};

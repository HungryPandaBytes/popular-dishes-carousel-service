const { PopularDishes } = require("./model.js");

module.exports = {
  PopularDishesController: {
    get: (req, res) => {
      PopularDishes.get((err, data) => {
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
  }
};

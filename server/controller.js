const { PopularDishes } = require("./model.js");

module.exports = {
  PopularDishes: {
    get: (req, res) => {
      PopularDishes.get((err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      });
    }
  }
};

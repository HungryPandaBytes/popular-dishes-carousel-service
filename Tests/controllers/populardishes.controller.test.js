// Testing Express API with JEST (unit tests) ======================================================================================

// Mock MySQL
const mysql = require("mysql");
jest.mock("mysql");
mysql.createConnection.mockReturnValue({
  connect: () => {},
  query: (_, callback) => {
    return callback(null, "test_data");
  }
});

const { mockRequest, mockResponse } = require("../test_utils.js");
const { PopularDishesController } = require("../../server/controller.js");

describe("/GET all popular dishes", () => {
  it("should call res.send with results from MySQL query in PopularDishes.get model", () => {
    let req = mockRequest();
    req.params.id = 1;
    const res = mockResponse();

    PopularDishesController.get(req, res);

    expect(res.send).toHaveBeenCalledWith("test_data");
  });
});

// Testing Express API with JEST (unit test) ======================================================================================
const db = require("../../server/db.js");
jest.mock("../../server/db.js", () => {
  return {
    query: testResults => {
      return testResults;
    }
  };
});
const { mockRequest, mockResponse } = require("../test_utils.js");
const { PopularDishesController } = require("../../server/controller.js");

// var testResults = ["testData"];
// mysql.createConnection.mockReturnValue({
//   connect: () => {},
//   query: (_, callback) => callback(null, testResults)
// });

describe("/GET all popular dishes", () => {
  it("should call res.send with results from MySQL query in PopularDishes.get model", () => {
    // mysql.createConnection.mockReturnValue({
    //   connect: () => {},
    //   query: (_, callback) => callback(null, testResults)
    // });
    var testResults = [];

    let req = mockRequest();
    req.params.id = 1;
    const res = mockResponse();

    PopularDishesController.get(req, res);

    expect(res.send).toHaveBeenCalledWith(testResults);
  });
});

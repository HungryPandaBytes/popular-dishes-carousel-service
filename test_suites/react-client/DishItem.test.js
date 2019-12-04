// CLIENT SIDE TESTING ==================================
import DishItem from "../components/DishItem";
import { shallow } from "enzyme";

// make a fake item that gets passed into it
const fakeItem = {
  dishName: "Baby Back Ribs",
  ratingNumCount: 23,
  photoNumCount: 10
};

// constrain to testing a component as a unit to ensure the tests aren't as
// call the mounting (means the moment when your component is inserted into the DOM) component a wrapper
describe("<DishItem />", () => {
  it("renders and displays properly"),
    () => {
      const wrapper = shallow(<DishItem item={fakeItem} />);
      // print out the entire html tag structure
      console.log(wrapper.debug());
    };
});

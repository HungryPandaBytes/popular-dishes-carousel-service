// CLIENT SIDE TESTING ==================================
import React from "react";
import { shallow } from "enzyme";

// component
import DishItem from "../client/src/components/DishItem.jsx";

// make a fake item that gets passed into it
const fakeItem = {
  dishName: "Baby Back Ribs",
  ratingNumCount: 23,
  photoNumCount: 10
};

// use shallow rendering to check if <TopDishes /> renders and displays properly
describe("<DishItem />", () => {
  it("renders and displays properly"),
    () => {
      const wrapper = shallow(<DishItem item={fakeItem} />);
      // print out the entire html tag structure
      console.log(wrapper.debug());
      // check if it renders the TopDishes tag
      const TopDishes = wrapper.find("DishItem");
      // print out the html tag specifically for TopDishes
      console.log(DishItem.debug());
    };
});

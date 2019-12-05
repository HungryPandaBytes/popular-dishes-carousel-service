// CLIENT SIDE TESTING ==================================================================================

import React from "react";
import { shallow } from "enzyme";

// component
import { TopDishes } from "../client/src/components/TopDishes.jsx";

// make a fake item that gets passed into it
const fakeItem = {
  dishName: "Baby Back Ribs",
  ratingNumCount: 23,
  photoNumCount: 10
};

// use shallow rendering to check if <TopDishes /> renders and displays properly
describe("<TopDishes />", () => {
  it("renders and displays properly"),
    () => {
      const wrapper = shallow(<TopDishes item={fakeItem} />);
      // print out the entire html tag structure
      console.log(wrapper.debug());
      // check if it renders the TopDishes tag
      const TopDishes = wrapper.find("TopDishes");
      // print out the html tag specifically for TopDishes
      console.log(TopDishes.debug());
    };
});

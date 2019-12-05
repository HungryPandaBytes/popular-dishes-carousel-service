import React from "react";
import DishItem from "./DishItem.jsx";

const TopDishes = props => {
  const sliderStyle = {
    width: "65%",
    margin: "auto",
    display: "block-inline",
    display: "flex",
    overflow: "scroll",
    flexDirection: "row"
  };
  return (
    <div style={sliderStyle}>
      {props.fakeDishes.map((dish, idx) => {
        return <DishItem key={idx} dish={dish} />;
      })}
    </div>
  );
};

export default TopDishes;

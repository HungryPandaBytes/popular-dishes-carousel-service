import React from "react";
import DishItem from "./DishItem.jsx";

const TopDishes = props => {
  return (
    <div>
      {props.fakeDishes.map((dish, idx) => {
        return <DishItem key={idx} dish={dish} />;
      })}
    </div>
  );
};

export default TopDishes;

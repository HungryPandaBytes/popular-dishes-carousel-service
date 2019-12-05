import React from "react";
import DishItem from "./DishItem.jsx";

const TopDishes = props => {
  return (
    <div>
      {props.fakeDishes.forEach(dish => {
        <DishItem dish={dish} />;
      })}
    </div>
  );
};

// export default TopDishes;

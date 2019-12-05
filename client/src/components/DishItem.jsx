import React from "react";

const DishItem = props => {
  const imgStyles = {
    width: "250px",
    height: "250px"
  };
  const divStyles = {
    margin: "5px",
    backgroundColor: "#eff0f1",
    display: "inline-block"
  };
  return (
    <div style={divStyles}>
      <img
        src={props.dish.img}
        style={imgStyles}
        alt="No image. It's a pretty dish tho."
      />
      <ul>{props.dish.dishName}</ul>
      <ul>
        {props.dish.photoCount}Photos {props.dish.reviewCount}Reviews
      </ul>
    </div>
  );
};

export default DishItem;

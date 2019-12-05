import React from "react";

const DishItem = props => {
  const imgStyles = {
    width: "200px",
    height: "150px"
  };
  const divStyles = {
    margin: "5px",
    backgroundColor: "#eff0f1",
    display: "inline-blick",
    position: "relative"
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

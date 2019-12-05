import React from "react";

const DishItem = props => {
  const imgStyles = {
    width: "150px",
    height: "100px"
  };
  const divStyles = {
    fontFamily: "Helvetica Neue",
    margin: "5px",
    backgroundColor: "#eff0f1",
    position: "relative",
    textAlign: "left"
  };
  return (
    <div style={divStyles}>
      <img
        src={props.dish.img}
        style={imgStyles}
        alt="No image. It's a pretty dish tho."
      />
      <ul style={{ fontFamily: "Helvetica Neue", fontSize: "10px" }}>
        {props.dish.dishName}
      </ul>
      <ul style={{ fontFamily: "Helvetica Neue", fontSize: "7px" }}>
        {props.dish.photoCount} Photos {props.dish.reviewCount} Reviews
      </ul>
    </div>
  );
};

export default DishItem;

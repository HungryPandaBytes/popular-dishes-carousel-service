import React from "react";
import styled from "styled-components";

const DishItem = props => {
  return (
    <StyledPopularDish>
      <PopularDishImage
        src={props.dish.img}
        alt="No image. It's a pretty dish tho."
      />
      <ul>{props.dish.dishName}</ul>
      <ul style={{ fontFamily: "Helvetica Neue", fontSize: "7px" }}>
        {props.dish.photoCount} Photos {props.dish.reviewCount} Reviews
      </ul>
    </StyledPopularDish>
  );
};

const PopularDishImage = styled.img`
  width: 150px;
  height: 100px;
`;
const StyledPopularDish = styled.div`
  font-family: Helvetica Neue;
  font-size: 10px;
  margin: 5px;
  background-color: #eff0f1;
  position: relative;
  text-align: left;
`;

export default DishItem;

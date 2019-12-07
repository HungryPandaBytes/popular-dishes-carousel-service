import React from "react";
import styled from "styled-components";

const DishItem = props => {
  return (
    <StyledPopularDish onClick={props.showModal}>
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
  border-radius: 4px 4px 0px 0px;
`;

const StyledPopularDish = styled.div`
  font-family: Helvetica Neue;
  font-size: 10px;
  margin: 5px;
  background-color: #eff0f1;
  position: relative;
  text-align: left;
  border-radius: 4px;
  &:hover {
    box-shadow: 1px 1px 5px #c0c0c0;
  }
`;

export default DishItem;

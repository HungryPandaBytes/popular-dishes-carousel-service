import React from "react";
import styled from "styled-components";

const DishItem = props => {
  return (
    <StyledPopularDish onClick={props.showModal}>
      <PopularDishImage
        src={props.dish.img}
        alt="No image. It's a pretty dish tho."
      />
      <StyledDescription>
        <div>{props.dish.dishName}</div>
        <div style={{ fontFamily: "Helvetica Neue", fontSize: "7px" }}>
          {props.dish.photoCount} Photos {props.dish.reviewCount} Reviews
        </div>
      </StyledDescription>
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
  background-color: white;
  position: relative;
  text-align: left;
  border-radius: 4px;
  &:hover {
    box-shadow: 1px 1px 5px #c0c0c0;
  }
`;

const StyledDescription = styled.div`
  border-left: 1px solid #c0c0c0;
  border-right: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
`;

export default DishItem;

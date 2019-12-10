import React from "react";
import styled from "styled-components";

const DishItem = props => {
  return (
    <StyledPopularDish onClick={props.showModal}>
      <PopularDishImage
        src={props.dish.dish_photo_url}
        alt="No image. It's a pretty dish tho."
      />
      <StyledDescription>
        <div style={{ marginTop: "15px", marginLeft: "15px" }}>
          {props.dish.dish_name}
        </div>
        <div
          style={{
            marginBottom: "15px",
            marginLeft: "15px",
            fontFamily: "Helvetica Neue",
            fontWeight: "400",
            color: "grey",
            fontSize: "10px"
          }}
        >
          {Math.floor(Math.random() * 5) + 1} Photos •{" "}
          {Math.floor(Math.random() * 22) + 1} Reviews
        </div>
      </StyledDescription>
    </StyledPopularDish>
  );
};

export const PopularDishImage = styled.img`
  width: 150px;
  height: 100px;
  border-radius: 4px 4px 0px 0px;
`;

const StyledPopularDish = styled.div`
  font-family: Helvetica Neue;
  font-size: 12px;
  font-weight: 700;
  margin: 5px;
  border-left: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  background-color: white;
  position: relative;
  text-align: left;
  border-radius: 4px;
  &:hover {
    box-shadow: 1px 1px 5px #c0c0c0;
  }
`;

const StyledDescription = styled.div`
  border-bottom: 1px solid #f0f0f0;
`;

export default DishItem;

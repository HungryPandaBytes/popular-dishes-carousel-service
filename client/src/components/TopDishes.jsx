import React from "react";
import DishItem from "./DishItem.jsx";
import styled from "styled-components";

const TopDishes = props => {
  // carousel wrapper styling
  const Wrapper = styled.div`
    height: 200px;
    width: 485px;
    position: relative;
    overflow: hidden;
    margin: auto;
  `;

  // carousel styling
  const CarouselWrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flexdirection: row;
    overflow: scroll;
    transition: all 1s ease;
    ${"" /* position: absolute */}
  `;

  // button wrapper using flexbox
  const ButtonWrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    ${"" /* when i implemented the js logic to animate the change, enable the absolute position
    position: "absolute",
    alignItems: "center" */}
  `;

  // button styling
  const Button = styled.button`
    padding: 5;
    height: 35;
    width: 35;
    border-radius: 400;
    background-color: light-grey;
  `;
  console.log();
  return (
    <Wrapper className="wrapper">
      <CarouselWrapper
        className="sliderWrapper"
        ref={node => node && console.log("width of carousel", node.offsetWidth)}
      >
        {props.fakeDishes.map((dish, idx) => {
          return <DishItem key={idx} dish={dish} />;
        })}
      </CarouselWrapper>
      <ButtonWrapper className="buttonWrapper">
        <Button>Prev</Button>
        <Button>Next</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TopDishes;

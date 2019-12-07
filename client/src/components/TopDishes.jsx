import React from "react";
import DishItem from "./DishItem.jsx";
import styled from "styled-components";

class TopDishes extends React.Component {
  constructor(props) {
    super(props);
    this.carouselwrapper = React.createRef();
  }

  nextButtonHandler() {
    this.carouselwrapper.current.scrollBy({
      top: 0,
      left: 480,
      behavior: "smooth"
    });
  }

  prevButtonHandler() {
    this.carouselwrapper.current.scrollBy({
      top: 0,
      left: -480,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <Wrapper>
        <CarouselWrapper ref={this.carouselwrapper}>
          {this.props.fakeDishes.map((dish, idx) => {
            return (
              <DishItem
                key={idx}
                dish={dish}
                showModal={this.props.showModal}
              />
            );
          })}
        </CarouselWrapper>
        <ButtonWrapper>
          <Button onClick={this.prevButtonHandler.bind(this)}>Prev</Button>
          <Button onClick={this.nextButtonHandler.bind(this)}>Next</Button>
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

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
  overflow: auto;
  position: relative;
  -ms-overflow-style: none;
  &:: -webkit-scrollbar {
    display: none;
  }
`;

// button wrapper using flexbox
export const ButtonWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  position: "absolute";
`;

// button styling
export const Button = styled.button`
  padding: 5;
  height: 35;
  width: 35;
  border-radius: 400;
  background-color: light-grey;
  position: "absolute";
  &:hover {
    box-shadow: 1px 1px 5px #c0c0c0;
  }
`;

export default TopDishes;

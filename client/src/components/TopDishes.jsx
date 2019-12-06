import React from "react";
import DishItem from "./DishItem.jsx";
import styled from "styled-components";

class TopDishes extends React.Component {
  constructor(props) {
    super(props);
    this.carouselwrapper = React.createRef();
    this.state = {};
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    const carouselWidth = this.carouselwrapper.current.offsetWidth;
    console.log(this.carouselwrapper.current);
    console.log("baz");
    this.carouselwrapper.current.scrollBy({
      right: 1000,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <Wrapper className="wrapper">
        <CarouselWrapper className="sliderWrapper" ref={this.carouselwrapper}>
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
        <ButtonWrapper className="buttonWrapper">
          <Button>Prev</Button>
          <Button onClick={this.onClickHandler}>Next</Button>
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

export default TopDishes;

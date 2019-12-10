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
          {this.props.dishes.map((dish, idx) => {
            return (
              <DishItem
                key={idx}
                dish={dish}
                photos={this.props.photos}
                showModal={this.props.showModal}
              />
            );
          })}
        </CarouselWrapper>
        <ButtonWrapper>
          <Button onClick={this.prevButtonHandler.bind(this)}>&#x3c;</Button>
          <Button onClick={this.nextButtonHandler.bind(this)}>&#x3e;</Button>
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

// carousel wrapper styling
const Wrapper = styled.div`
  height: 200px;
  width: 490px;
  position: relative;
  overflow: hidden;
`;

// carousel styling
const CarouselWrapper = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flexdirection: row;
  overflow: auto;
  -ms-overflow-style: none;
  &:: -webkit-scrollbar {
    display: none;
  }
`;

// button wrapper using flexbox
export const ButtonWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  position: absolute;
  justify-content: space-between;
  top: 30%;
`;

// button styling
export const Button = styled.button`
  padding: 5px;
  height: 30px;
  width: 30px;
  border-radius: 400px;
  background-image: light-grey;
  &:hover {
    box-shadow: 1px 1px 5px #c0c0c0;
  }
`;

export default TopDishes;

import React from "react";
import styled from "styled-components";
import Slide from "./Slide.jsx";

class PhotoSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <StyledDishImageWrapper>
          {this.props.images.map((image, idx) => {
            return (
              <Slide
                image={image}
                key={idx}
                alt="No image. It's a pretty dish tho."
              />
            );
          })}
        </StyledDishImageWrapper>
      </div>
    );
  }
}

// Absolute Center (Vertical & Horizontal) an Image
// const SingleDishImage = styled.img`
//   top: 50%;
//   left: 50%;
//   width: 250px;
//   height: 200px;
//   margin-top: -100px; /* Half the max height */
//   margin-left: -125px; /* Half the max width */
//   background-color: black;
// `;

const StyledDishImageWrapper = styled.div`
  width: 400px;
  height: 100%;
  background-color: black;
  position: relative;
  display: flex;
  overflow: hidden;
`;

export default PhotoSlider;

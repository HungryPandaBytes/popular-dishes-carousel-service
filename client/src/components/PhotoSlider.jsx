import React from "react";
import styled from "styled-components";

class PhotoSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          img:
            "http://cdn.cnn.com/cnnnext/dam/assets/140423165935-8-obama-sushi-chef-jiro-ono-story-top.jpg",
          caption: "This is delicious"
        },
        {
          img: "https://kottke.org/plus/misc/images/jiros-sushi.jpg",
          caption: "This is gross"
        },
        {
          img: "https://kottke.org/plus/misc/images/jiros-sushi.jpg",
          caption: "This is cool"
        }
      ],
      currentIdx: 1
    };
  }
  render() {
    return (
      <StyledDishImageWrapper>
        <SingleDishImage
          src={this.state.images[0].img}
          alt="No image. It's a pretty dish tho."
        />
      </StyledDishImageWrapper>
    );
  }
}

// Absolute Center (Vertical & Horizontal) an Image
const SingleDishImage = styled.img`
  position: relative;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 200px;
  margin-top: -100px; /* Half the max height */
  margin-left: -125px; /* Half the max width */
  background-color: black;
`;

const StyledDishImageWrapper = styled.div`
  width: 100%;
  background-color: black;
`;

export default PhotoSlider;

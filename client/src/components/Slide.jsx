import React from "react";
import styled from "styled-components";

const Slide = props => {
  return (
    <StyledSlide>
      <StyledImage src={props.image.img}></StyledImage>
    </StyledSlide>
  );
};

const StyledSlide = styled.div``;
const StyledImage = styled.img`
  width: 400px;
  height: 400px;
`;

export default Slide;

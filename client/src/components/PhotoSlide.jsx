import React from "react";
import styled from "styled-components";

const PhotoSlide = props => {
  return (
    <StyledSlide>
      <StyledImage src={props.image.img}></StyledImage>
      <StyledCaption>{props.image.caption}</StyledCaption>
    </StyledSlide>
  );
};

const StyledSlide = styled.div`
  display: flex;
  font-family: Helvetica Neue;
  color: white;
  position: relative;
`;
const StyledCaption = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledImage = styled.img`
  height: 100%;
`;

export default PhotoSlide;

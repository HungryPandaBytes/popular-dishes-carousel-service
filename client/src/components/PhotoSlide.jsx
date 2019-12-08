import React from "react";
import styled from "styled-components";

const PhotoSlide = props => {
  return (
    <StyledSlide>
      <StyledImage src={props.image.img}></StyledImage>
      <StyledCaption>
        <span> {props.image.caption}</span>
        <span>
          {props.currentIdx + 1} of {props.totalPhotoCount}
        </span>
      </StyledCaption>
    </StyledSlide>
  );
};

const StyledSlide = styled.div`
  font-family: Helvetica Neue;
  color: white;
  display: flex;
  flex-direction: row;
  position: relative;
`;
const StyledCaption = styled.div`
  position: absolute;
  padding-top: 1%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 1%;
  bottom: 0%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledImage = styled.img`
  overflow: hidden;
`;

export default PhotoSlide;

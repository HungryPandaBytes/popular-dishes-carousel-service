import React from "react";
import styled from "styled-components";

const Slide = props => {
  return (
    <StyledSlide>
      <StyledImage src={props.image.img}></StyledImage>
      <StyledCaption style={{ margin: "10px" }}>
        {props.image.caption}
      </StyledCaption>
    </StyledSlide>
  );
};

const StyledSlide = styled.div`
  font-family: Helvetica Neue;
  position: absolute;
  display: block flex;
  justify-content: space-between;
  color: white;
  height: 100%;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledCaption = styled.div`
  position: absolute;
  bottom: 5%;
  padding: 25px 10px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledImage = styled.img`
  top-width: 200px;
  top-height: 200px;
`;

export default Slide;

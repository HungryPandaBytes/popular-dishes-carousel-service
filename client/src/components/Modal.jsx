import React from "react";
import styled from "styled-components";
import PhotoSlider from "./PhotoSlider.jsx";
import { Button } from "./TopDishes.jsx";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyledModal className="modal">
        <StyledInnerModal className="modalInner">
          <ModalButton>◄</ModalButton>
          <PhotoSlider />
          <ModalButton>►</ModalButton>
          <PhotoSlider />
          <button onClick={this.props.closePopup}>close</button>
        </StyledInnerModal>
      </StyledModal>
    );
  }
}

const StyledModal = styled.div`
  position: fixed;
  width: 100vm;
  height: 100vm;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;
const StyledInnerModal = styled.div`
  position: absolute;
  left: 10%;
  right: 10%;
  top: 10%;
  bottom: 10%;
  margin: auto;
  display: flex;
  border-radius: 5px;
`;

// button styling
const ModalButton = styled.button`
  height: 35;
  width: 35;
  color: white;
  margin: 0px;
  border: 0px;
  background-color: black;
  position: "relative";
`;

export default Modal;

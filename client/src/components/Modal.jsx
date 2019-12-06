import React from "react";
import styled from "styled-components";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyledModal className="modal">
        <StyledInnerModal className="modalInner">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </StyledInnerModal>
      </StyledModal>
    );
  }
}

const StyledModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;
const StyledInnerModal = styled.div`
  position: absolute;
  left: 5%;
  right: 5%;
  top: 5%;
  bottom: 5%;
  margin: auto;
  border-radius: 20px;
  background: white;
`;  

export default Modal;

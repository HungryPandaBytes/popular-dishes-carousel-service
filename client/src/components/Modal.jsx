import React from "react";
import styled from "styled-components";
import PhotoSlider from "./PhotoSlider.jsx";

class Modal extends React.Component {
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
        }
      ]
    };
    this.PhotoSliderRef = React.createRef();
  }
  prevSlideButton() {}

  nextSlideButton() {
    this.PhotoSliderRef.current.scrollBy({
      top: 0,
      left: 250,
      behavior: "initial"
    });
  }
  render() {
    return (
      <StyledModal className="modal">
        <StyledInnerModal className="modalInner">
          <ModalButton onClick={this.prevSlideButton.bind(this)}>◄</ModalButton>
          <PhotoSlider ref={this.PhotoSliderRef} images={this.state.images} />
          <ModalButton onClick={this.nextSlideButton.bind(this)}>►</ModalButton>
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
  height: 35px;
  width: 35px;
  color: white;
  margin: 0px;
  border: 0px;
  background-color: black;
  position: "relative";
`;

export default Modal;

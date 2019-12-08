import React from "react";
import styled from "styled-components";
import Slide from "./Slide.jsx";

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
      ],
      currentIdx: 0
    };
    this.PhotoSliderRef = React.createRef();
  }
  prevSlideButton() {
    const currentIdx = this.state.currentIdx;
    if (currentIdx >= this.state.images.length - 1) {
      this.setState({
        currentIdx: currentIdx - 1
      });
    }
  }

  nextSlideButton() {
    const currentIdx = this.state.currentIdx;
    if (currentIdx < this.state.images.length - 1) {
      this.setState({
        currentIdx: currentIdx + 1
      });
    }
  }

  render() {
    return (
      <StyledModal className="modal">
        <StyledInnerModal className="modalInner">
          <ModalButton onClick={this.prevSlideButton.bind(this)}>
            <StyledArrowButton>&#x3c;</StyledArrowButton>
          </ModalButton>{" "}
          <PhotoSliderWrapper>
            <Slide image={this.state.images[this.state.currentIdx]} />
          </PhotoSliderWrapper>
          <ModalButton onClick={this.nextSlideButton.bind(this)}>
            <StyledArrowButton>&#x3e;</StyledArrowButton>
          </ModalButton>
        </StyledInnerModal>
        <StyledExitButton onClick={this.props.closePopup}>
          <h3 style={{ fontFamily: "Helvetica Neue" }}>Close X</h3>
        </StyledExitButton>
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
  background-color: black;
  border-radius: 10px;
`;

const PhotoSliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: relative;
  display: flex;
  justify-content: space-evenly;
`;

// button styling
const ModalButton = styled.button`
  height: 35px;
  width: 35px;
  color: white;
  margin: 0px;
  border: 0px;
  background-color: black;
`;

const StyledArrowButton = styled.span`
  font-size: 35px;
  transform: scale(0.5, 1);
`;

const StyledExitButton = styled.button`
  position: absolute;
  background-color: Transparent;
  right: 10%;
  top: 4%;
  border: none;
  cursor: pointer;
  overflow: hidden;
  color: white;
`;
export default Modal;

import React from "react";
import TopDishes from "./TopDishes.jsx";
import Modal from "./Modal.jsx";
import styled from "styled-components";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
      photos: [],
      showModal: false
    };
  }

  componentDidMount() {
    axios
      .get("/api/popular-dishes/1")
      .then(response => this.setState({ dishes: response.data }))
      .then(
        axios
          .get("/api/photos/1")
          .then(response => this.setState({ photos: response.data }))
      );
  }

  showModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }


  render() {
    return (
      <PopularDishesWrapper>
        <h4>Popular Dishes</h4>
        <TopDishes
          dishes={this.state.dishes}
          photos={this.state.photos}
          showModal={this.showModal.bind(this)}
        />

        {this.state.showModal ? (
          <Modal
            photos={this.state.photos}
            text="This feature is coming out soon..."
            closePopup={this.showModal.bind(this)}
          />
        ) : null}
      </PopularDishesWrapper>
    );
  }
}

export default App;

const PopularDishesWrapper = styled.div`
  margin: 0 110px;
  font-family: Helvetica Neue;
`;

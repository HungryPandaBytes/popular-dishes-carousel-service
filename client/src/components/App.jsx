import React from "react";
import TopDishes from "./TopDishes.jsx";
import Modal from "./Modal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.fakeDishes = [
      {
        img: "https://kottke.org/plus/misc/images/jiros-sushi.jpg",
        dishName: "Toro Sushi",
        photoCount: 3,
        reviewCount: 23
      },
      {
        img: "https://kottke.org/plus/misc/images/jiros-sushi.jpg",
        dishName: "Salmon Sushi",
        photoCount: 5,
        reviewCount: 2
      },
      {
        img: "https://kottke.org/plus/misc/images/jiros-sushi.jpg",
        dishName: "Kanpanchi Sushi",
        photoCount: 3,
        reviewCount: 44
      },
      {
        img: "https://kottke.org/plus/misc/images/jiros-sushi.jpg",
        dishName: "Lobster Sushi",
        photoCount: 3,
        reviewCount: 23
      },
      {
        img: "https://kottke.org/plus/misc/images/jiros-sushi.jpg",
        dishName: "King Salmon Sushi",
        photoCount: 5,
        reviewCount: 2
      },
      {
        img: "https://kottke.org/plus/misc/images/jiros-sushi.jpg",
        dishName: "Squid Sushi",
        photoCount: 3,
        reviewCount: 44
      },
      {
        img: "https://kottke.org/plus/misc/images/jiros-sushi.jpg",
        dishName: "Salmon Sushi",
        photoCount: 5,
        reviewCount: 2
      },
      {
        img: "https://kottke.org/plus/misc/images/jiros-sushi.jpg",
        dishName: "Kanpanchi Sushi",
        photoCount: 3,
        reviewCount: 44
      },
      {
        img: "https://kottke.org/plus/misc/images/jiros-sushi.jpg",
        dishName: "Lobster Sushi",
        photoCount: 3,
        reviewCount: 23
      },
      {
        img: "https://kottke.org/plus/misc/images/jiros-sushi.jpg",
        dishName: "King Salmon Sushi",
        photoCount: 5,
        reviewCount: 2
      }
    ];
  }

  showModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}> Popular Dishes</h3>
        <TopDishes
          fakeDishes={this.fakeDishes}
          showModal={this.showModal.bind(this)}
        />

        {this.state.showModal ? (
          <Modal
            text="This feature is coming out soon..."
            closePopup={this.showModal.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default App;

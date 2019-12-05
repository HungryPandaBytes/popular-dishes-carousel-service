import React from "react";
import TopDishes from "./TopDishes.jsx";

class PopularDishesCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    var buttonStyle = {
      padding: 5,
      height: 35,
      width: 35,
      borderRadius: 400,
      backgroundColor: "light-grey"
    };
    return (
      <div>
        <h3>Popular Dishes</h3>
        <button style={buttonStyle}>Prev</button>
        <TopDishes fakeDishes={this.fakeDishes} />
        <button style={buttonStyle}>Next</button>
      </div>
    );
  }
}

export default PopularDishesCarousel;

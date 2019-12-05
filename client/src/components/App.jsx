import React from "react";
import TopDishes from "./TopDishes.jsx";

class App extends React.Component {
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
      }
    ];
  }

  render() {
    return <TopDishes fakeDishes={this.fakeDishes} />;
  }
}

export default App;

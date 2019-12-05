import React from "react";
import TopDishes from "./TopDishes.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fakeDishes = [
      {
        dishName: "Baby Back Rib",
        photoCount: 3,
        reviewCount: 23
      },
      {
        dishName: "Beef",
        photoCount: 5,
        reviewCount: 2
      },
      {
        dishName: "Brussel Sprouts",
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

import React from "react";
import TopDishes from "./TopDishes.jsx";
import Modal from "./Modal.jsx";
import styled from "styled-components";

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
        img:
          "https://media-cdn.tripadvisor.com/media/photo-s/09/c3/1a/82/sukiyabashi-jiro-roppongi.jpg",
        dishName: "Smoked Bonito",
        photoCount: 5,
        reviewCount: 2
      },
      {
        img: "https://media.timeout.com/images/103951131/630/472/image.jpg",
        dishName: "Kanpanchi Sushi",
        photoCount: 3,
        reviewCount: 44
      },
      {
        img:
          "https://media-cdn.tripadvisor.com/media/photo-s/07/b7/ec/b8/sukiyabashi-jiro-roppongi.jpg",
        dishName: "Ebi Sushi",
        photoCount: 3,
        reviewCount: 23
      },
      {
        img:
          "https://www.fodors.com/wp-content/uploads/2018/10/10_JiroSushi_TooMuchFOMO_8162076064_7198734377_o_2.jpg",
        dishName: "King Salmon Sushi",
        photoCount: 5,
        reviewCount: 2
      },
      {
        img:
          "https://bestthingslicedbread.files.wordpress.com/2012/04/photo_04.jpg",
        dishName: "Chu Toro Sushi",
        photoCount: 3,
        reviewCount: 44
      },
      {
        img:
          "https://images.squarespace-cdn.com/content/v1/50d144f6e4b05aff8e5b9c8c/1516336700607-GE9CP0V1NRCGDVMFO6LA/ke17ZwdGBToddI8pDm48kDITAuO7WvGYe_HtkNx7UXUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKccSshEJlWdTt0omCZRbgujVtY4VXZAEc5nErFE5qOWR3S1FgW-KjVULYQWGVDwFXf/jiro-sushi.jpg?format=1000w",
        dishName: "Salmon Sushi",
        photoCount: 5,
        reviewCount: 21
      },
      {
        img: "https://i.imgur.com/63Kaw40.jpg",
        dishName: "Kanpanchi Sushi",
        photoCount: 3,
        reviewCount: 44
      },
      {
        img: "https://i.imgur.com/LXQjNbk.jpg",
        dishName: "Ika Sushi",
        photoCount: 3,
        reviewCount: 23
      },
      {
        img:
          "https://cdn.vox-cdn.com/thumbor/hgKYnkNBiPRNeFHEPBkbolUGyMU=/67x0:432x274/1200x800/filters:focal(67x0:432x274)/cdn.vox-cdn.com/uploads/chorus_image/image/39125498/jiro-dreams-of-sushi-food-porn-thumb.0.jpg",
        dishName: "Tuna Sushi",
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
      <PopularDishesWrapper>
        <h4>Popular Dishes</h4>
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
      </PopularDishesWrapper>
    );
  }
}

export default App;

const PopularDishesWrapper = styled.div`
  margin: 0 110px;
  font-family: Helvetica Neue;
`;

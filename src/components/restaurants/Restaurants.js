import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props;
    const allRestaurants = restaurants.map((rest) => (
      <Restaurant
        key={rest.id}
        restaurant={rest}
        deleteRestaurant={deleteRestaurant}
      />
    ));
    return <ul>{allRestaurants}</ul>;
  }
}

export default Restaurants;

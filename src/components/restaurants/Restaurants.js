import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant}  deleteRestaurant={this.props.deleteRestaurant} addReview={this.props.addReview} />)}
      </ul>
    );
  }
};

export default Restaurants;
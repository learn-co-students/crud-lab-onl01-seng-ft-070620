import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  onClick = (event) => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;

    return (
      <li>
        {restaurant.text}
        <button onClick={this.onClick} > X </button>
        <ReviewsContainer restaurant={restaurant} addReview={this.props.addReview} />
      </li>
    );
  }
};

export default Restaurant;

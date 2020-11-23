import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  handleOnClick = (event) => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleOnClick}> X </button>
          <ReviewsContainer restaurant={restaurant} restaurantId={this.props.restaurant.id} addReview={this.props.addReview} deleteReview={this.props.deleteReview} reviews={this.props.reviews}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

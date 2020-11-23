import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  
  render() {
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    return (
      <ul>
        {this.props.reviews.map(review => {
          return <Review review={review} id={review.id} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurantId}/>
        })}
      </ul>
    );
  }
};

export default Reviews;
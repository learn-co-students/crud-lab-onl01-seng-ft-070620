import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={this.props.restaurant.id}
        />
        <Reviews
          deleteReview={this.props.deleteReview}
          restaurantId={this.props.restaurant.id}
        />
      </div>
    )
  }

}

// reviews have content, a restaurant id key, and their own id key
const mapDispatchToProps = dispatch => {
  return {
    addReview: reviewObj => dispatch({ type: "ADD_REVIEW", payload: reviewObj }),
    deleteReview: id => dispatch({ type: "DELETE_REVIEW", payload: id })
  }
}

export default connect(null, mapDispatchToProps)(ReviewsContainer)

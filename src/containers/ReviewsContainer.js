import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
    let {restaurant, deleteReview, addReview, editReview, allReviews} = this.props
    let reviews = allReviews.filter(r => r.restaurantId === restaurant.id)
    return (
      <div>
        <ReviewInput restaurantId={restaurant.id} addReview={addReview}/>
        <Reviews deleteReview={deleteReview} editReview={editReview} reviews={reviews}/>
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {
  return {allReviews: reviews}
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (review) => dispatch({type: "ADD_REVIEW", review}),
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id}),
    editReview: review => dispatch({type: "UPDATE_REVIEW", review})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

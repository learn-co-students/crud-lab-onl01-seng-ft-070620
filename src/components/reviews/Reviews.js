import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let {deleteReview, editReview, reviews} = this.props
    return (
      <ul>
        {reviews.map(r => <Review edit={editReview} delete={deleteReview} key={r.id} id={r.id} review={r}/>)}
      </ul>
    );
  }
};

export default Reviews;
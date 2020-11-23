import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = event => {
    this.props.deleteReview(this.props.id)
  }

  render() {
    const { review } = this.props;

    return (
      <div>
        <li restaurantId={this.props.restaurantId}>
          {review.text}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Review;

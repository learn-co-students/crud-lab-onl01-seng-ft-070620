import React, { Component } from 'react';
import Restaurant from '../restaurants/Restaurant';

class Review extends Component {

  render() {
    const { review } = this.props;

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => this.props.delete(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;

import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

export default class Restaurant extends Component {
  handleDelete = event => {
    this.props.deleteRestaurant(this.props.id)
  }

  render() {
    const { restaurant } = this.props

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleDelete}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    )
  }

}

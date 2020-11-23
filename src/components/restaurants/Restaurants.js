import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(r => {
          return <Restaurant restaurant={r}
          id={r.id}
          deleteRestaurant={this.props.deleteRestaurant}
          reviews={this.props.reviews}
          addReview={this.props.addReview}
          deleteReview={this.props.deleteReview}/>
        })}
      </ul>
    );
  }
};

export default Restaurants;
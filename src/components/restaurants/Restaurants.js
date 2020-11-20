import React, { Component } from 'react'
import Restaurant from './Restaurant'

export default class Restaurants extends Component {
  render() {
    return (
      <ul>
        {this.props.restaurants.map(r =>
          <Restaurant
            key={r.id}
            id={r.id}
            restaurant={r}
            deleteRestaurant={this.props.deleteRestaurant}
            />
          )}
      </ul>
    )
  }

}

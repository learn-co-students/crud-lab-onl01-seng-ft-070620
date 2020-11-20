import React, { Component } from 'react';

export default class RestaurantInput extends Component {
  state = { text: '' }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>Restaurant Name: </label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit Restaurant" />
        </form>
      </div>
    )
  }

}

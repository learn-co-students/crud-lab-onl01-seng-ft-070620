import React, { Component } from 'react';

export default class ReviewInput extends Component {
  state = {text: ''}

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const reviewObj = { text: this.state.text, rId: this.props.restaurantId }
    this.props.addReview(reviewObj)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>Add Review: </label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit Review" />
        </form>
      </div>
    )
  }

}

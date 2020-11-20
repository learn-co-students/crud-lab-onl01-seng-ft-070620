import React, { Component } from 'react'

export default class Review extends Component {
  handleDelete = () => {
    this.props.deleteReview(this.props.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleDelete}> X </button>
      </div>
    )
  }

}

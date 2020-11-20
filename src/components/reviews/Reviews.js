import React, { Component } from 'react'
import Review from './Review'
import { connect } from 'react-redux'

class Reviews extends Component {
  render() {
    let associatedReviews = this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId)

    return (
      <ul>
        {associatedReviews.map(r =>
          <Review
            key={r.id}
            id={r.id}
            review={r}
            deleteReview={this.props.deleteReview}
          />
        )}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}


export default connect(mapStateToProps)(Reviews)

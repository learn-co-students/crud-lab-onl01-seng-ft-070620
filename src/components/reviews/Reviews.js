import React, { Component } from 'react';
import Review from './Review';
import {connect} from 'react-redux'

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map((review) => {
          // console.log(review)
          // console.log(this.props.restaurantId)
          //console.log(review.restaurantId === this.props.restaurantId)
          if(review.restaurantId === this.props.restaurantId){ 
            return <Review review={{...review}} delete={this.props.deleteReview}/>
          }
        })}
      </ul>
    );
  }
};

const mapStateToProps = (state) => {
  return{reviews: state.reviews}
}

const mapDispatchToProps = (dispatch) => {
  return{deleteReview: (id) => dispatch({type: 'DELETE_REVIEW', id})}
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
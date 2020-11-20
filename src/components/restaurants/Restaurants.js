import React, { Component } from 'react';
import {connect} from 'react-redux'
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map((restaurant) => {
          return <Restaurant restaurant={{...restaurant}} delete={this.props.deleteRestaurant}/>
          })}
      </ul>
    );
  }
};

const mapStateToProps = (state) => {
  return{restaurants: state.restaurants}
}

const mapDispatchToProps = (dispatch) => {
  return{deleteRestaurant: (id) => dispatch({type: 'DELETE_RESTAURANT', id})}
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
import React, { Component } from 'react';
import {connect} from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    let {restaurants, addRestaurant, deleteRestaurant} = this.props
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant}/>
        <Restaurants deleteRestaurant={deleteRestaurant} restaurants={restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => {
  return {restaurants}
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: ({text}) => dispatch({type: "ADD_RESTAURANT", text}),
    deleteRestaurant: id => dispatch({type: "DELETE_RESTAURANT", id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);

import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }
  
  onChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <input type="text" onChange={this.onChange} value={this.state.text} ></input>
        <input type="submit"></input>
      </form>
    );
  }
};

export default RestaurantInput;

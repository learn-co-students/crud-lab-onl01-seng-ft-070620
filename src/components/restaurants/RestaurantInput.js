import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {text: ''}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({text: ''})
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}>
            <input 
              name='text'
              onChange={this.handleChange}
              value={this.state.text}  
              type="text"
            />
            <input 
              type="submit"
              value="Submit"
            />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

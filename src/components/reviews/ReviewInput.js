import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
    super();

    this.state = {text: ''};
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value}) //each input needs a name prop
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({...this.state, restaurantId: this.props.restaurantId})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Content
            <input onChange={this.handleChange} id="text" name="text" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <input type="submit" value="submit"/>
        </div>
      </form>
    );
  }
}

export default ReviewInput

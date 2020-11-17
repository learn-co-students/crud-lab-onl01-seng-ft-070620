import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {text: '', restaurantId: this.props.restaurantId}
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReview(this.state)
    this.setState({text: '', restaurantId: this.props.restaurantId})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}/>
          <input 
            type='submit'
            value="Submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

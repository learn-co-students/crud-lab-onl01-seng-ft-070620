import React, { Component } from 'react';

class Review extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = {isUpdating: false, review: this.props.review}
  }

  handleDelete = () => {
    this.props.delete(this.props.id)
  }

  handleEdit = () => {
    this.setState({
      ...this.state,
      isUpdating: true
    })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      review: {
        ...this.state.review,
        text: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.edit(this.state.review)
    this.setState({isUpdating: false, review: this.props.review})
  }

  render() {
    const { review } = this.props;
    if (this.state.isUpdating) {
      return (
        <div>
          <li>
            <div>
              <form onSubmit={this.handleSubmit}>
                <input 
                  type="text"
                  name="text"
                  onChange={this.handleChange}
                  value={this.state.review.text}/>
                <input 
                  type='submit'
                  value="Submit"/>
              </form>
            </div>
          </li>
        </div>
      )
    } else {
      return (
        <div>
          <li>
            {review.text}
          </li>
          <button onClick={this.handleDelete}> X </button>
          <button onClick={this.handleEdit}> Edit </button>
        </div>
      );
    }
    
  }

};

export default Review;

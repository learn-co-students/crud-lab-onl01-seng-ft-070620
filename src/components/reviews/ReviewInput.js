// import React, { Component } from 'react';
// // import Reviews from './Reviews';

// class ReviewInput extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { 
//       content: '',
//     }
//   }

//   handleChange = event => {
//     this.setState({
//       content: event.target.value
//     })
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     this.props.addReview({content: this.state.content, restaurantId: this.props.restaurantId})
//     this.setState({content: ''})
//   }

//   render() {
//     return (
//       <div> <br></br>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" value={this.state.content} onChange={this.handleChange} placeholder="Review"/>
//           <input type="submit"/>
//         </form>
//       </div>
//     )
//   }
// }

// export default ReviewInput;




import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
     <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Add Review</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
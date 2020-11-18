// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import manageRestaurant from './reducers/manageRestaurant';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension'

// const initialState = {restaurants: [{text: "Billy Bobs", id: "MYSTARTUP"}], reviews: []}
// const store = createStore(manageRestaurant, initialState, composeWithDevTools()) 

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// document.getElementById('root')
// );




import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageRestaurant)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
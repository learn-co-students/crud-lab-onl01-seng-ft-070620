import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant';
// import manageReview from './reducers/manageReview';
// import { combineReducers } from 'redux'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageRestaurants from './reducers/manageRestaurant';

// const rootReducer = combineReducers({restaurant: manageRestaurant, review: manageReview})
const store = createStore(manageRestaurants);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);

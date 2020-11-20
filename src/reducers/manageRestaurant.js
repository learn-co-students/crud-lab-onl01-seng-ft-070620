import cuid from 'cuid'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  reviews: reviewsReducer
})

export default rootReducer

function restaurantsReducer(state = [], action) {
  switch(action.type) {
    case "ADD_RESTAURANT":
      const newRestaurant = { id: cuid(), text: action.payload }
      return [...state, newRestaurant]

    case "DELETE_RESTAURANT":
      return state.filter(restaurant => restaurant.id !== action.payload)

    default:
      return state
  }
}

function reviewsReducer(state = [], action) {
  switch(action.type) {
    case "ADD_REVIEW":
      const newReview = { id: cuid(), text: action.payload.text, restaurantId: action.payload.rId }
      return [...state, newReview]

    case "DELETE_REVIEW":
      return state.filter(review => review.id !== action.payload)

    default:
      return state
  }
}

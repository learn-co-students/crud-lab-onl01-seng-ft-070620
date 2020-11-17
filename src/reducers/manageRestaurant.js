import cuid from 'cuid';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    restaurants,
    reviews
})

export default rootReducer

function restaurants(state = [], action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            return [...state, {text: action.text, id: cuid()}]
        case "DELETE_RESTAURANT":
            return state.filter(r => r.id !== action.id)
        default: return state
    }
}

function reviews(state = [], action) {
    switch (action.type) {
        case "ADD_REVIEW":
            return state.concat({text: action.review.text, restaurantId: action.review.restaurantId, id: cuid()})
        case "DELETE_REVIEW":
            return state.filter(r => r.id !== action.id)
        case "UPDATE_REVIEW":
            let idx = state.findIndex(r => r.id === action.review.id)
            debugger
            return [...state.slice(0, idx), action.review, ...state.slice(idx+1)]
        default: return state
    }
}
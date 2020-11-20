import cuid from 'cuid';

export default function manageRestaurants(state = {restaurants: []}, action) {
    //console.log(action)
    switch(action.type)
    {
        case 'ADD_RESTAURANT':
            return {...state, restaurants: [...state.restaurants, {text: action.text, id: cuid()}]}
        case 'DELETE_RESTAURANT':
            console.log({...state, restaurants: state.restaurants.filter((restaurant) => restaurant.id !== action.id)})
            return {...state, restaurants: state.restaurants.filter((restaurant) => restaurant.id !== action.id)}
        default:
            return state
    }
}

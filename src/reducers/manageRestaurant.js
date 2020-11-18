// import cuid from 'cuid';

// export default function manageRestaurants(state, action) {

//     console.log(action.type)

//     switch(action.type) {

//         case "ADD_RESTAURANT":
//             const restaurant = {
//                 text: action.payload,
//                 id: cuid()
//             }
//             console.log(restaurant)
//             return {
//                 ...state, restaurants: [
//                     ...state.restaurants, restaurant]
//             }

//         case "DELETE_RESTAURANT":
//             const restaurants = state.restaurants.filter( restaurant => restaurant.id !== action.payload)
//             console.log(action.payload)
//             return { ...state, restaurants}
        
//         case "ADD_REVIEW":
//             const review = {
//                 content: action.payload.content,
//                 id: cuid(),
//                 restaurantId: action.payload.restaurantId
//             }
//             console.log(review)
//             return {
//                 ...state, reviews: [
//                     ...state.reviews, review]
//             }

//         case "DELETE_REVIEW":
//             const reviews = state.reviews.filter( review => review.id !== action.payload)
//             console.log(action.payload)
//             return {...state, reviews }
            
//         default:
//             return state
//     }
// }



import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':

      const restaurant = { text: action.text, id: cuidFn() };
      return {
        ...state,
        restaurants: [ ...state.restaurants, restaurant]
      }

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { ...state, restaurants}

    case 'ADD_REVIEW':

      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
      return { ...state,
        reviews: [...state.reviews, review]
      }

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews }

    default:
      return state;

  }
};
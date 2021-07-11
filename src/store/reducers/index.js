import { combineReducers } from "redux";
import cartReducer from './Cart'
import pizzaReducer from './Pizza'
import modalReducer from './Modal'
import drinksReducer from './Drinks'
import promoReducer from './Promo'
import orderReducer from './Order'

const rootReducers = combineReducers({
  pizza: pizzaReducer,
  modal:modalReducer,
  cart: cartReducer,
  drinks: drinksReducer,
  promo: promoReducer,
  order: orderReducer,
})

export default rootReducers
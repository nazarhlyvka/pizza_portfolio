import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from './Pizza'
import modalReducer from './Modal'
import cartReducer from './Cart'
import drinksReducer from './Drinks'
import promoReducer from './Promo'
import orderReducer from './Order'

const store  = configureStore({
  reducer: {
    pizza: pizzaReducer,
    modal:modalReducer,
    cart: cartReducer,
    drinks: drinksReducer,
    promo: promoReducer,
    order: orderReducer,
  }
})

export default store
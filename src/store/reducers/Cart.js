import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {cart: []},
  reducers: {
    addToCart: (state, action) => {
        state.cart = action.payload
    }
  }
})

export default cartSlice.reducer

export const {addToCart} = cartSlice.actions
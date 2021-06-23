import { createSlice } from "@reduxjs/toolkit";
import drinksDB from './DB/DrinksDB'

const drinksSlice = createSlice({
  name: 'drinks',
  initialState:{drinks:drinksDB, toCart:[]},
  reducers:{
    addDrinkToCart: (state,action) => {
      const index = state.drinks.findIndex(item => item.id === action.payload)
      const newItem = {
        id: state.drinks[index].id,
        name: state.drinks[index].name,
        image: state.drinks[index].image,
        price: state.drinks[index].price,
        amount: state.drinks[index].price,
        quantity: 1 
      }
      state.toCart = [...state.toCart, newItem]
      state.drinks[index].inCart = true
    },
    moreDrinks: (state, action) => {
      const item = state.toCart.find((item) => item.id === action.payload);
      if(item) {
        item.amount = item.amount + item.price
        item.quantity = ++item.quantity
      }
    },
    lessDrinks: (state, action) => {
      const item = state.toCart.find((item) => item.id === action.payload);
      if(item) {
        item.amount = item.amount - item.price
        item.quantity = --item.quantity
      }
    },
    removeDrinks: (state, action) => {
      const indexToCart = state.toCart.findIndex(item => item.id === action.payload)
      const indexDrinks = state.drinks.findIndex(item => item.id === action.payload)
      state.toCart = [...state.toCart.slice(0, indexToCart), ...state.toCart.slice(indexToCart + 1)]
      state.drinks[indexDrinks].inCart = false
    },
    refreshDrinks: (state) => {
      state.toCart = []
      state.drinks = state.drinks.map(item => {
        return{
          name: item.name,
          ml: item.ml,
          price: item.price,
          image: item.image,
          id: item.id,
          inCart: false,
        }
      })
    },
  }
})

export default drinksSlice.reducer

export const {addDrinkToCart, moreDrinks, lessDrinks, removeDrinks, refreshDrinks} = drinksSlice.actions
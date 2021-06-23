import { createSlice } from "@reduxjs/toolkit";
import pizzaDB from "./DB/PizzaDB";

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: { pizza: pizzaDB, toCart: [] },
  reducers: {
    addPizzaToCart: (state, action) => {
      const index = state.pizza.findIndex((item) => item.id === action.payload);
      const newItem = {
        id: state.pizza[index].id,
        name: state.pizza[index].name,
        image: state.pizza[index].image,
        price: state.pizza[index].price,
        amount: state.pizza[index].price,
        quantity: 1,
      };
      state.toCart = [...state.toCart, newItem];
      state.pizza[index].inCart = true;
    },
    morePizza: (state, action) => {
      const item = state.toCart.find((item) => item.id === action.payload);
      if(item) {
        item.amount = item.amount + item.price
        item.quantity = ++item.quantity
      }
    },
    lessPizza: (state, action) => {
      const item = state.toCart.find((item) => item.id === action.payload);
      if(item) {
        item.amount = item.amount - item.price
        item.quantity = --item.quantity
      }
    },
    removePizza: (state, action) => {
      const indexToCart = state.toCart.findIndex(item => item.id === action.payload)
      const indexPizzza = state.pizza.findIndex(item => item.id === action.payload)
      state.toCart = [...state.toCart.slice(0, indexToCart), ...state.toCart.slice(indexToCart + 1)]
      state.pizza[indexPizzza].inCart = false
    },
    refreshPizza: (state) => {
      state.toCart = []
      state.pizza = state.pizza.map(item => {
        return{
          name: item.name,
          ingredients: item.ingredients,
          weight: item.weight,
          price: item.price,
          image: item.image,
          id: item.id,
          inCart: false,
        }
      })
    },
  },
});

export default pizzaSlice.reducer;

export const { addPizzaToCart, morePizza, lessPizza, removePizza, refreshPizza} = pizzaSlice.actions;

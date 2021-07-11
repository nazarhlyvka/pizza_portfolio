import { createSlice } from "@reduxjs/toolkit";
import promoDB from "../DB/PromoDb";

const promoSlice = createSlice({
  name: "promo",
  initialState: { promo: promoDB, toCart: [] },
  reducers: {
    addPromoToCart: (state, action) => {
      const index = state.promo.findIndex((item) => item.id === action.payload);
      const newItem = {
        id: state.promo[index].id,
        name: state.promo[index].name,
        image: state.promo[index].image,
        price: state.promo[index].price,
        amount: state.promo[index].price,
        quantity: 1,
      };
      state.toCart = [...state.toCart, newItem];
      state.promo[index].inCart = true;
    },
    morePromo: (state, action) => {
      const item = state.toCart.find((item) => item.id === action.payload);
      if (item) {
        item.amount = item.amount + item.price;
        item.quantity = ++item.quantity;
      }
    },
    lessPromo: (state, action) => {
      const item = state.toCart.find((item) => item.id === action.payload);
      if (item) {
        item.amount = item.amount - item.price;
        item.quantity = --item.quantity;
      }
    },
    removePromo: (state, action) => {
      const indexToCart = state.toCart.findIndex(
        (item) => item.id === action.payload
      );
      const indexPromo = state.promo.findIndex(
        (item) => item.id === action.payload
      );
      state.toCart = [
        ...state.toCart.slice(0, indexToCart),
        ...state.toCart.slice(indexToCart + 1),
      ];
      state.promo[indexPromo].inCart = false;
    },
    refreshPromo: (state) => {
      state.toCart = [];
      state.promo = state.promo.map((item) => {
        return {
          name: item.name,
          set: item.set,
          price: item.price,
          weight: item.weight,
          image: item.image,
          id: item.id,
          inCart: false,
        };
      });
    },
  },
});

export default promoSlice.reducer;

export const {
  addPromoToCart,
  morePromo,
  lessPromo,
  removePromo,
  refreshPromo,
} = promoSlice.actions;

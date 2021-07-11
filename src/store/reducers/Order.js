import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: { orderForm: false, orderSuccess: false},
  reducers: {
    openOrderForm: (state) => {
      state.orderForm = true;
    },
    closeOrderForm: (state) => {
      state.orderForm = false;
    },
    openOrderSuccess: (state) => {
      state.orderSuccess = true;
    },
    closeOrderSuccess: (state) => {
      state.orderSuccess = false;
    },
  }
});

export default orderSlice.reducer;

export const {
  openOrderForm,
  closeOrderForm,
  openOrderSuccess,
  closeOrderSuccess,

} = orderSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { outModal: false, callBackModal: false, successModal: false },
  reducers: {
    openOutModal: (state) => {
      state.outModal = true;
    },
    closeOutModal: (state) => {
      state.outModal = false;
    },
    openCallBackModal: (state) => {
      state.callBackModal = true;
    },
    closeCallBackModal: (state) => {
      state.callBackModal = false;
    },
    openSuccessModal: (state) => {
      state.successModal = true;
    },
    closeSuccessModal: (state) => {
      state.successModal = false;
    },
  },
});

export default modalSlice.reducer;

export const {
  openOutModal,
  closeOutModal,
  openCallBackModal,
  openSuccessModal,
  closeCallBackModal,
  closeSuccessModal,
} = modalSlice.actions;

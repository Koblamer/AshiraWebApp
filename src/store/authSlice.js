// src/libs/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isOpenSignInModal: false,
  },
  reducers: {
    setOpenSignInModal: (state, action) => {
      state.isOpenSignInModal = action.payload;
    },
  },
});
export const { setOpenSignInModal } = authSlice.actions;
export const isOpenSignInModal = (state) => state.auth.isOpenSignInModal;

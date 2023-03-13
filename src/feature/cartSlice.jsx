import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
  totalAmount: 0,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.quantity += 1;
      state.cart.push(payload);
    },
    testCart: (state, { payload }) => {
      const cart = state.cart;
      const foundCart = cart.find((item) => item.id === payload.id);

      console.log(foundCart.title);
    },
  },
});

export const { addToCart, testCart } = cartSlice.actions;

export default cartSlice.reducer;

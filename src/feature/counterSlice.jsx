import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, { payload }) => {
      state.value += payload;
    },
    incrementByOne: (state) => {
      state.count += 1;
    },
    incrementByTen: (state, { payload }) => {
      state.count += payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementByOne,
  incrementByTen,
} = counterSlice.actions;

export default counterSlice.reducer;

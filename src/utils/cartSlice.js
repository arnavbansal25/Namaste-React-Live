import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {  // reducers WITH an (s)
    addItem: (state, action) => {
      console.log("Rrr", action);

      state.items.push(action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },

    removeItemFromEnd: (state) => {
      state.items.pop();
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;  // reducer WITHOUT an (s)

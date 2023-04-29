import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    // note that this is again "reducer" and not "reducers"
    cart: cartSlice,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import wishReducer from "./features/wishList/wishSlice";
import authReducer from "./features/auth/authSlice";
import productsReducer from "../servives/api/products/productsSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer,
    auth: authReducer,
    products: productsReducer,
  },
});

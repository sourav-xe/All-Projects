import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice'; // Adjust path as needed

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
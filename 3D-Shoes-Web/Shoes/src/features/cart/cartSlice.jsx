import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // If the item already exists, increment the quantity
        state.items[itemIndex].quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = action.payload.quantity;
      }
    },
    getTotalItems: (state) => {
      // Calculate the total number of items in the cart (sum of all quantities)
      return state.items.reduce((total, item) => total + item.quantity, 0);
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, getTotalItems } = cartSlice.actions;

export default cartSlice.reducer;

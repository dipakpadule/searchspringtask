import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const currentItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (currentItem) {
        currentItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
      state.cartCount += action.payload.quantity;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

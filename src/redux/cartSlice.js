import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { productId, quantity } = action.payload;
      const cartItem = state.findIndex((item) => item.productId === +productId);
      if (cartItem >= 0) {
        state[cartItem].quantity += +quantity;
      } else {
        state.push({ productId, quantity });
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((el) => {
        return el.productId === id;
      });
      state.splice(index, 1);
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((el) => {
        return el.productId === id;
      });
      state[index].quantity += +1;
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((el) => {
        return el.productId === id;
      });
      if (state[index].quantity > 1) state[index].quantity -= +1;
    },
  },
  setQuantity: (state, action) => {
    const { id, quantity } = action.payload;
    const index = state.findIndex((el) => {
      return el.productId === id;
    });
    state[index].quantity = quantity;
  },
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

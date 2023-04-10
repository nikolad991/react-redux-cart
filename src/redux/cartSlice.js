import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { productId: 8, quantity: 1 },
  { productId: 1, quantity: 3 },
  { productId: 5, quantity: 2 },
  { productId: 17, quantity: 5 },
  { productId: 22, quantity: 7 },
];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { productId, quantity } = action.payload;
      console.log("Current State: " + state);
      state.push({ productId, quantity });
      
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((el) => {
        return el.productId === action.payload.id;
      });
      console.log("Deleted item with index : " + index);

      state.splice(index, 1);
    },
    incrementQuantity: (action, payload) => {},
    decrementQuantity: (action, payload) => {},
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

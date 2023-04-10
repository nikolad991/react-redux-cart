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
      console.log("Deleted item with index : " + index);
      state.splice(index, 1);
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((el) => {
        return el.productId === id;
      });
      console.log(index);
      state[index].quantity += +1;
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((el) => {
        return el.productId === id;
      });
      console.log(index);
      state[index].quantity -= +1;
    },
  },
  setQuantity: (state,action) => {
    const { id, quantity } = action.payload;
    const index = state.findIndex((el) => {
      return el.productId === id;
    });
    console.log(index);
    state[index].quantity =quantity;
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

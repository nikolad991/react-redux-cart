import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      console.log(action.payload);
      state.push(...action.payload);
      
      console.log(state);
    },
  },
});
export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;

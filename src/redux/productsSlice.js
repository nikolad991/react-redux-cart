import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.push(
        ...action.payload.map((product) => ({ ...product, visible: true }))
      );
    },
    filterProductsByCategory: (state, action) => {
      const categories = action.payload.map((category) => category.name);

      return state.map((product) => {
        if (!categories.includes(product.category))
          return { ...product, visible: false };
        else return { ...product, visible: true };
      });
    },
  },
});
export const { setProducts, filterProductsByCategory } = productsSlice.actions;
export default productsSlice.reducer;

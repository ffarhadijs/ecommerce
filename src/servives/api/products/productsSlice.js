import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

const initialState = {
  productsList: [],
  fetchingProducts: false,
  errorMessage: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.productsList = action.payload;
      state.fetchingProducts = false;
    },
    [fetchProducts.pending]: (state) => {
      state.fetchingProducts = true;
    },
    [fetchProducts.rejected]: (state) => {
      state.fetchingProducts = false;
      state.errorMessage = "Something went wrong...";
    },
  },
});

export default productsSlice.reducer;

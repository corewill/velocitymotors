import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { items: [], status: "idle", error: null };

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (id=null, {rejectWithValue} ) => {
    try{
    const response = await axios.get("https://velocitymotorsapi.onrender.com");
    return response?.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
}
);


export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchproduct: (state, action) => {
      return action.payload;
    },
  
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "success"
      state.items = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "rejected"
      state.error = action.payload;
    },
  }

});


export const { searchproduct } = productSlice.actions;

export default productSlice.reducer;
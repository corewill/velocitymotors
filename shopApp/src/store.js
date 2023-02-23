import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "./reducers/productSlice";
import { productsApi } from "./reducers/productsApi";
import cartReducer, { getTotals } from "./reducers/cartSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware),
  
});

store.dispatch(fetchProducts());
store.dispatch(getTotals());

export default store;

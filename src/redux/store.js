import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './admin';
import productReducer from './productSlice';
import cartReducer from './cartSlice';

const store = configureStore(
  {
    reducer: {
      products: productReducer,
      cart: cartReducer,
      dashboard: dashboardReducer,
    }
  }
);

export default store;



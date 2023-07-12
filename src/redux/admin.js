import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
    addNewProduct: (state, action) => {
      state.data.push(action.payload);
    },
    deleteOneProduct: (state, action) => {
      state.data = state.data.filter((product) => product.id !== action.payload.id);
    },
    updateProduct: (state, action) => {
      state.date = state.data.map((product) => product.id === action.payload.id ? action.payload : product)
    },
    sortProducts: (state, action) => {
      state.data = state.data.sort((a, b) => a.price - b.price)
    },
    sortProductsRating: (state, action) => {
      state.data = state.data.sort((a, b) => a.rating.rate - b.rating.rate)
    },



  },



});

export const { fetchProducts, addNewProduct, deleteOneProduct, sortProducts, sortProductsRating } = dashboardSlice.actions;
export default dashboardSlice.reducer;

export function getProducts() {
  return async function getProductThunk(dispatch, getState) {
    const response = await fetch('https://fakestoreapi.com/products')
    const result = await response.json()
    dispatch(fetchProducts(result))
  }
}


export const addProduct = createAsyncThunk('dashboard/addNewProduct', async (product) => {
  const response = await fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
});


export const deleteProduct = createAsyncThunk('dashboard/deleteOneProduct', async (product) => {
  const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
    method: 'DELETE',
    body: JSON.stringify(product),
  })
  const data = await response.json();
  return data;
})

export const updateProduct = createAsyncThunk('dashboard/updateProduct', async (product) => {
  const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
}
)
export const sortProduct = createAsyncThunk('dashboard/sortProducts', async (product) => {
  const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
}
)
export const sortProductRating = createAsyncThunk('dashboard/sortProductsRating', async (product) => {
  const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
}
)








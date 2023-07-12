import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const product = action.payload
      const existingProduct = state.find(item => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity += product.quantity
      } else {
        state.push({ ...product })
      }
    },


    remove(state, action) {
      return state.filter(item => item.id !== action.payload.id)
    },
    emptyCart(state, action) {
      return state = []
    }
  }
})
export const { addCart, remove, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
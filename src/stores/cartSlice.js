import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload)
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter((product) => product._id !== action.payload._id)
    }
  }
})

export const cartActions = cartSlice.actions
export const cartReducers = cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

import { fetchProducts } from './actionCreators'

const initialState = {
  products: [],
  isLoading: false,
  error: ''
}

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload)
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending.type, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProducts.fulfilled.type, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected.type, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.products = []
      })
  }
})

export const { addProduct, removeProduct } = shopSlice.actions
export default shopSlice.reducer

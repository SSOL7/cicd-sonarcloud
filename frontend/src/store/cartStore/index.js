import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      if (state.length === 0) {
        state.push({ ...action.payload, quantity: 1 })
      } else {
        const index = state.findIndex(
          (product) => product.title === action.payload.title
        )
        if (index === -1) {
          state.push({ ...action.payload, quantity: 1 })
        } else {
          state[index].quantity++
        }
      }
    },
    changeItemQuantity(state, action) {
      const index = state.findIndex(
        (product) => product.title === action.payload.title
      )
      state[index].quantity += action.payload.quantity
    },
    removeFromCart(state, action) {
      const index = state.findIndex(
        (product) => product.title === action.payload.title
      )
      state.splice(index, 1)
    }
  }
})

export const { addToCart, changeItemQuantity, removeFromCart } =
  cartSlice.actions
export default cartSlice.reducer

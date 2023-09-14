import { combineReducers, configureStore } from '@reduxjs/toolkit'

import cartSlice from './cartStore/index'
import shopSlice from './shopStore/index'

const rootReducer = combineReducers({
  shop: shopSlice,
  cart: cartSlice
})

export const store = configureStore({
  reducer: rootReducer
})

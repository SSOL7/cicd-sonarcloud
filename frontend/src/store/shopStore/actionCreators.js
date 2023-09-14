import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../../utils/constants'

export const fetchProducts = createAsyncThunk(
  'users/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}products`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

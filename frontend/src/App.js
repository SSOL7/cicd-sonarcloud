import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import router from './router/router'
import { fetchProducts } from './store/shopStore/actionCreators'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return <RouterProvider router={router} />
}

export default App

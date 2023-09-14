import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useSelector } from 'react-redux'

import Product from '../components/Product'
import {
  getError,
  getIsLoading,
  getProducts
} from '../store/shopStore/selectors'

const ProductList = () => {
  const products = useSelector(getProducts)
  const error = useSelector(getError)
  const isLoading = useSelector(getIsLoading)

  return (
    <>
      {isLoading && (
        <Spinner
          style={{ width: '5rem', height: '5rem' }}
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {error && <div>{error}</div>}
      {!isLoading && products.length === 0 && <div>No products to display</div>}
      {products.length > 0 &&
        products.map((product) => <Product key={product.id} {...product} />)}
    </>
  )
}

export default ProductList

import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h1>
        <Link to="/products">
          Page not found, but you can browse our beautiful collection of
          products
        </Link>
      </h1>
    </div>
  )
}

export default PageNotFound

import React from 'react'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'

import { getCartTotalItems } from '../store/cartStore/selectors'

const HeaderCart = () => {
  const totalItems = useSelector(getCartTotalItems)
  const navigate = useNavigate()

  if (totalItems === 0) {
    return null
  }
  return (
    <Button
      className="d-flex align-items-center justify-content-between position-relative"
      variant="outline-secondary"
      onClick={() => navigate('cart')}
    >
      <svg
        className="position-ablosute"
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        fill="currentColor"
        className="bi bi-cart"
        viewBox="0.5 0.5 16 15"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
      {
        <span className="fs-4 position-absolute top-50 start-50 translate-middle">
          {totalItems}
        </span>
      }
    </Button>
  )
}

export default HeaderCart

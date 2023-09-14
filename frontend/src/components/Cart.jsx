import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { changeItemQuantity, removeFromCart } from '../store/cartStore'
import { getCart } from '../store/cartStore/selectors'

const Cart = () => {
  const cart = useSelector(getCart)
  const dispatch = useDispatch()

  const addItem = (title) => {
    dispatch(changeItemQuantity({ title: title, quantity: 1 }))
  }

  const removeItem = (title) => {
    if (cart.find((item) => item.title === title).quantity === 1) {
      dispatch(removeFromCart(title))
    } else {
      dispatch(changeItemQuantity({ title: title, quantity: -1 }))
    }
  }

  return (
    <div className="container-fluid">
      <h1 className="text-center">Cart</h1>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr className="text-center">
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className="text-end d-flex align-items-center justify-content-center gap-1">
                <Button
                  variant="outline-secondary"
                  onClick={() => addItem(item.title)}
                >
                  +
                </Button>
                {item.quantity}
                <Button
                  variant="outline-secondary"
                  onClick={() => removeItem(item.title)}
                >
                  -
                </Button>
              </td>
              <td className="text-end">${item.price}</td>
              <td className="text-end">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <span className="text-end fs-4 fw-light">
          Total: $
          {cart
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
        </span>
      </div>
    </div>
  )
}

export default Cart

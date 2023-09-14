export const getCart = ({ cart }) => cart
export const getCartTotalItems = ({ cart }) => {
  return cart.reduce((total, product) => total + product.quantity, 0)
}

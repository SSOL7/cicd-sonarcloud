import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux'

import { addToCart } from '../store/cartStore'
import CustomModal from './CustomModal'

const Product = ({ title, price, description, category, rating, image }) => {
  const [modalShow, setModalShow] = React.useState(false)
  const [textToShow, setTextToShow] = React.useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (description.length > 360) {
      setTextToShow(description.slice(0, 360))
    } else {
      setTextToShow(description)
    }
  }, [description])

  const handleAddToCart = () => {
    setModalShow(false)
    dispatch(addToCart({ title, price, description, category, rating, image }))
  }

  const isDescriptionLong = description.length > 360
  const isFullDescriptionShown = textToShow === description

  return (
    <Card className="shadow rounded" style={{ width: '400px' }}>
      <Card.Header className="d-flex flex-column text-center">
        <span>Category: {category}</span>
        <span>
          {rating.rate}⭐️ out of {rating.count} votes
        </span>
      </Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Title className="text-center m-2 fs-4 fw-light">
          {title}
        </Card.Title>
        <Card.Text className="mt-4 fs-5 fw-lighter">
          Description: {textToShow}
          {isDescriptionLong && !isFullDescriptionShown && (
            <strong
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setTextToShow(description)
              }}
            >
              . . .
            </strong>
          )}
        </Card.Text>
        <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-cart-plus"
            viewBox="0 0 16 16"
          >
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </Button>
        <CustomModal
          show={modalShow}
          title={title}
          onHide={() => setModalShow(false)}
          onConfirm={handleAddToCart}
        />
      </Card.Body>
      <Card.Footer className="text-center">Price: ${price}</Card.Footer>
    </Card>
  )
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired
}

export default Product

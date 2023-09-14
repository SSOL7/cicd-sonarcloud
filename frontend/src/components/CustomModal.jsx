import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const CustomModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{`Are you sure you want to buy ${props.title}?`}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onConfirm}>Confirm</Button>
        <Button onClick={props.onHide}>Decline</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CustomModal

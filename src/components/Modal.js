import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap";
const _secretWord = "hello"

export const ModalComponent = () => {
  let keyboardInput = ""
  const [show, setShow] = useState(false)

  const handleModal = () => {
    show ? setShow(false) : setShow(true)
  }

  document.addEventListener("keydown", (key) => {
    keyboardInput += key.key

    if(_secretWord === keyboardInput) {
      handleModal()
      keyboardInput = ""
  }
  else {
      setTimeout(() => {
          keyboardInput = ""
      }, 2000)
  }
  
  })
    return (
        <>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title className="highlighted-text">HELLO THERE</Modal.Title>
          </Modal.Header>
          <Modal.Body>You have found the second easter egg! Well done! I'm sure you have found the first easter egg already! But if you haven't, try clicking somewhere around my name.
          Good day to you!</Modal.Body>
          <Modal.Footer>
            <Button onClick={handleModal} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )

}
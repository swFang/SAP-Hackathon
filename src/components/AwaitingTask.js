import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function AwaitingTask(props) {
  const [isComplete, setData] = useState(props.complete);
  const [modalShow, setModalShow] = React.useState(false);

  //             <button type="button" class="btn btn-primary" onClick={() => props.onDelete(props.title)}>Complete</button>
  function showUncompleteButton() {
    if (!isComplete) {
      console.log("INCOMPLETE")
      //      return <button type="button" class="btn btn-primary" onClick={() => props.onUpdate(props.title)}>Accept Request</button>

      return (
        <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Take request
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          deletetask={() => update()}
          onHide={() => setModalShow(false)}
        />
        </>
      )
    }
  }

  function update() {
    setModalShow(false);
    props.onUpdate(props.title);
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button class="btn float-left btn-secondary" onClick={props.onHide}>Close</button>
          <button class="btn float-right btn-primary" onClick={props.deletetask}>Accept Request</button>
          </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <h5>Address</h5>
        <h6 class="card-subtitle mb-2 text-muted">{props.date}</h6>
  <p class="card-text">{props.description}</p>
        {showUncompleteButton()}
      </div>
    </div>
  )
}

export default AwaitingTask;
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"; //react bootstrap being react bootstrap
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [emailEntered, setEmailEntered] = useState(false);
  const [passwordEntered, setPassWordEntered] = useState(false);

  const enabled = emailEntered && passwordEntered && checked;

  const handleEmailChange = (value) => {
    if (value.length > 0) setEmailEntered(true);
  };
  const handlePasswordChange = (value) => {
    if (value.length > 0) setPassWordEntered(true);
  };

  return (
    <div>
      <Col className="mt-3">
        <Row className="justify-content-md-center">
          <p className="title">Cypress testing with Husky pre-commit hooks</p>
        </Row>
      </Col>
      <Row className="justify-content-md-center">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <Form.Text className="text-muted">
              Super secure email field.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree to enable button click"
              onClick={() => setChecked(!checked)}
            />
          </Form.Group>
          <Button
            className="submitBtn mr-5"
            variant="outline-primary"
            type="submit"
            disabled={!enabled}
          >
            Submit
          </Button>
          <Button
            variant="outline-info"
            onClick={() => setShowModal(!showModal)}
            className="modalBtn"
            disabled={enabled}
          >
            Press Me To Test Modal
          </Button>
        </Form>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>I love Cypress</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <a href="https://github.com/ankittrehan2000">Click for url testing</a>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;

import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
export default function Login({ setId }) {
  const idRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setId(idRef.current.value);
  };
  const createNewId = () => {
    setId(uuidv4());
  };
  return (
    <Container
      className="d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter your id:</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="me-2">
          Login
        </Button>
        <Button variant="secondary" onClick={createNewId}>
          Create a new id
        </Button>
      </Form>
    </Container>
  );
}

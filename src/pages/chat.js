import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, ListGroup, Modal, Form } from "react-bootstrap";
import "./chat.css";

export default function Chat() {
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [showFriendModal, setShowFriendModal] = useState(false);

  return (
    <div className="chat-page bg-dark text-white min-vh-100">
      <Container fluid className="py-4">
        <h2 className="text-center mb-4">Chat</h2>

        <Row>
          {/* Sidebar */}
          <Col md={3} className="bg-secondary p-3 rounded">
            <h5>Contacts</h5>
            <ListGroup variant="flush" className="mb-3">
              <ListGroup.Item className="bg-secondary text-white border-0">Alice</ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white border-0">Bob</ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white border-0">Charlie</ListGroup.Item>
            </ListGroup>

            <div className="d-grid gap-2">
              <Button variant="primary" onClick={() => setShowFriendModal(true)}>
                Add Friend
              </Button>
              <Button variant="success" onClick={() => setShowGroupModal(true)}>
                Create Group
              </Button>
            </div>
          </Col>

          {/* Chat Window */}
          <Col md={9} className="bg-dark p-3 border rounded">
            <div className="chat-box mb-3">
              <div className="message mb-2">
                <strong>Alice:</strong> Hey there!
              </div>
              <div className="message mb-2 text-end">
                <strong>You:</strong> Hello!
              </div>
            </div>

            <Form>
              <Row>
                <Col xs={10}>
                  <Form.Control type="text" placeholder="Type a message..." />
                </Col>
                <Col xs={2}>
                  <Button type="submit" variant="primary" className="w-100">
                    Send
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Add Friend Modal */}
      <Modal show={showFriendModal} onHide={() => setShowFriendModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Friend's Email or Username</Form.Label>
              <Form.Control type="text" placeholder="Enter email or username" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowFriendModal(false)}>
            Cancel
          </Button>
          <Button variant="primary">Send Request</Button>
        </Modal.Footer>
      </Modal>

      {/* Create Group Modal */}
      <Modal show={showGroupModal} onHide={() => setShowGroupModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Group Name</Form.Label>
              <Form.Control type="text" placeholder="Enter group name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Invite Friends</Form.Label>
              <Form.Control type="text" placeholder="Enter usernames separated by commas" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowGroupModal(false)}>
            Cancel
          </Button>
          <Button variant="success">Create</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

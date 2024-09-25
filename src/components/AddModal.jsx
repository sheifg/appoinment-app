import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddModal = ({ show, handleClose, selectedDoctor, onAppointmentCreation }) => {
  const [patient, setPatient] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const appointment = {
        id: Date.now(),
        patient: patient,
        day: date,
        consulted: false,
        doctor: selectedDoctor,
    }

    handleClose();
    onAppointmentCreation(appointment);
    
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation for {selectedDoctor}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                id="patient"
                onChange={(event) => setPatient(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Day & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                id="date"
                onChange={(event) => setDate(event.target.value)}
              />
            </Form.Group>
            <div className="text-center">
              <Button className="m-1" variant="primary" type="submit">
                Submit
              </Button>
              <Button className="m-1" variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddModal;

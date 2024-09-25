import React, { useState } from "react";
import Doctor from "./Doctor";
import { Container, Row } from "react-bootstrap";
import AddModal from "./AddModal";

import { doctorData } from "../helper/data";

const Doctors = ({ onAppointmentCreation}) => {
  const [show, setShow] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (doctorName) => {
    setSelectedDoctor(doctorName);
    handleShow();
  };


  return (
    <Container className="p-2">
      <h3 className="mb-3" style={{ color: "#B60071" }}>
        Doctors
      </h3>
      <Row className="justify-content-center">
        {doctorData.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor} handleClick={handleClick} />
        ))}
      </Row>
      <AddModal
        show={show}
        handleClose={handleClose}
        selectedDoctor={selectedDoctor}
        setSelectedDoctor={setSelectedDoctor}
        onAppointmentCreation={onAppointmentCreation}
      />
    </Container>
  );
};

export default Doctors;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Appointment = ({ appointment, onAppointmentDeletion }) => {
  console.log(appointment);

  return (
    <div className="appointments">
      <Row className="justify-content-center align-items-center g-3">
        <Col xs={12} sm={6} md={4}>
          <h4 style={{ color: "#468585" }}>{appointment.patient}</h4>
          <h5>{appointment.doctor}</h5>
        </Col>
        <Col xs={10} sm={9} md={4}>
          <h5>Date:{new Date(appointment.day).toLocaleDateString()}</h5>
          <h5>Time:{new Date(appointment.day).toLocaleTimeString()}</h5>
        </Col>
        <Col xs={2} sm={4} md={1} >
          <IoIosCloseCircleOutline
            style={{ color: "#468585" }}
            type="button"
            onClick={() => onAppointmentDeletion(appointment.id)}
          />
        </Col>
      </Row>
    </div>
  );
};
export default Appointment;

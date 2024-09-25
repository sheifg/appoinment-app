import React from "react";
import { Col } from "react-bootstrap";

const Doctor = ({ doctor, handleClick }) => {
  return (
    <Col xs={6} sm={4} md={3} type="button">
      <img
        src={doctor.img}
        alt={doctor.name}
        className="doctor-img img-thumbnail "
        onClick={() => handleClick(doctor.name)}
      />
      <div>
        <h5>{doctor.name}</h5>
        <h6>{doctor.dep}</h6>
      </div>
    </Col>
  );
};

export default Doctor;

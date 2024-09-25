import React from "react";
import { Container, Row } from "react-bootstrap";
import Appointment from "./Appointment";

const AppointmentList = ({ appointments, onAppointmentDeletion }) => {
  return (
    <Container>
      <h3 className="mb-3 text-center mt-3" style={{ color: "#B60071" }}>
        Appointment List
      </h3>
      <div className="d-flex flex-column align-items-center" >
      {appointments.length < 1 && (
          <img src="./img/appointment.jpg" width={"80%"} alt="appoint" />
        )}
        {appointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            onAppointmentDeletion={onAppointmentDeletion}
          />
        ))}
      </div>
    </Container>
  );
};

export default AppointmentList;

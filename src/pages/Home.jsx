import React, { useState } from "react";
import Doctors from "../components/Doctors";
import AppointmentList from "../components/AppointmentList";
import { useEffect } from "react";

const Home = () => {
    // const [doctors, setDoctors] = useState(doctorData);

    // Using mock data
    // const [appointments, setAppointments] = useState(appointmentData);

    // Using local storage
    const [appointments, setAppointments] = useState(() => 
        JSON.parse(localStorage.getItem("appointments")) || []
    );
    console.log(appointments);

    useEffect(() => {
        localStorage.setItem("appointments", JSON.stringify(appointments));
    }, [appointments]);

    const onAppointmentCreation = (appointment) => {
        const appointmentList = [...appointments, appointment];
        console.log(appointmentList);
        setAppointments(appointmentList);
    }

    const onAppointmentDeletion = (id) => {
        const filteredAppointments = appointments.filter((appointment) => appointment.id !== id);
        setAppointments(filteredAppointments);
     }

    return (
    <div className="text-center mt-2 vh-100">
        <h1 style={{color: "#468585"}}>LUNAS HOSPITAL</h1>
        <Doctors onAppointmentCreation={onAppointmentCreation}/>
        <AppointmentList appointments={appointments} onAppointmentDeletion={onAppointmentDeletion} />
    </div>
    )

}

export default Home;
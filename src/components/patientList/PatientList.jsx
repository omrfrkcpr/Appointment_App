import React from "react";
import { Card, Button, Row } from "react-bootstrap";

import "./PatientList.css";
import AppointmentCard from "../appointmentCard/AppointmentCard";

const PatientList = ({ doctors, toggle, data, setData }) => {
  // Toggle appointment status
  const handleIsCompleted = (id) => {
    setData((prevData) => {
      const updatedData = prevData.map((appointment) => {
        if (appointment.id === id) {
          return { ...appointment, isCompleted: !appointment.isCompleted };
        }
        return appointment;
      });

      // Local Storage güncelleme
      localStorage.setItem("appointments", JSON.stringify(updatedData));

      return updatedData;
    });
  };

  // Delete appointment from database
  const handleDelete = (id, patient) => {
    if (
      window.confirm(
        `${patient}'s Appointment will be permanently deleted. Are you sure?`
      )
    ) {
      setData((prevData) => {
        // Filtreleme işlemi ile silinecek randevuyu hariç tut
        const updatedData = prevData.filter(
          (appointment) => appointment.id !== id
        );

        // Local Storage güncelleme
        localStorage.setItem("appointments", JSON.stringify(updatedData));

        return updatedData;
      });
    }
  };

  // doctor img mouse-over styling
  const handleMouseOver = (e) => {
    const eTarget = e.target.style;
    eTarget.transform = "scale(1.04)";
    eTarget.transitionDuration = "0.5s";
  };

  // doctor img mouse-out styling
  const handleMouseOut = (e) => {
    const eTarget = e.target.style;
    eTarget.transform = "scale(1)";
    eTarget.transitionDuration = "0.5s";
  };

  return (
    <>
      <h4 className="mt-5 mb-4 text-center border-bottom mx-3 p-2">
        All Doctors
      </h4>
      <Row className="text-center cards m-auto">
        {doctors &&
          doctors.map((doc) => {
            const { idDoctor, doctor, department, image } = doc;
            return (
              <Card style={{ width: "13rem" }} className="card" key={idDoctor}>
                <Card.Img
                  variant="top"
                  src={image}
                  onMouseOver={(e) => handleMouseOver(e)}
                  onMouseOut={(e) => handleMouseOut(e)}
                />
                <Card.Body>
                  <Card.Title>{doctor}</Card.Title>
                  <Card.Text>{department}</Card.Text>
                  <Button
                    onClick={() => toggle(doctor)}
                    style={{ backgroundColor: "#3da4f0" }}
                    className="btn-appointments"
                  >
                    Appointments
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </Row>
      <h4 className="mt-5 mb-4 text-center border-bottom mx-3 p-2">
        All Appointments
      </h4>
      <Row className="appointments text-center mb-5 justify-content-center align-items-center g-3 pb-3">
        {data.map((patients) => {
          const { id, patient, appointment, isCompleted, doctor, reason } =
            patients;
          return (
            <AppointmentCard
              key={id}
              id={id}
              patient={patient}
              doctor={doctor}
              appointment={appointment}
              reason={reason}
              isCompleted={isCompleted}
              handleDelete={handleDelete}
              handleIsCompleted={handleIsCompleted}
            />
          );
        })}
      </Row>
    </>
  );
};

export default PatientList;

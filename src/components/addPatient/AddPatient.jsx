import React from "react";
import uuid from "react-uuid";
import { Card, Row } from "react-bootstrap";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";
import "./AddPatient.css";
import { useState } from "react";
import AppointmentCard from "../appointmentCard/AppointmentCard";

const AddPatient = ({ data, targetDoctor, setData, goBack }) => {
  // console.log({ data, targetDoctor, toggle });

  const [newPatientName, setNewPatientName] = useState("");
  const [newDate, setNewDate] = useState("");

  const { idDoctor, doctor, department, resume, image } = targetDoctor;

  // Toggle appointment status
  const handleIsCompleted = (id) => {
    setData((prevData) => {
      const updatedData = prevData.map((appointment) => {
        if (appointment.id === id) {
          return { ...appointment, isCompleted: !appointment.isCompleted };
        }
        return appointment;
      });

      // Update local storage
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

        // Update local storage
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

  // create new appointment according to form and push into data.js
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure datetimeInput is not empty
    if (newDate) {
      // Convert datetime to desired format
      const formattedDateTime = new Date(newDate);
      const options = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        formattedDateTime
      );

      // Get reason
      const reason = document.getElementById("reason").value;

      // Create a new appointment
      const newAppointment = {
        id: uuid(),
        patient: newPatientName,
        appointment: formattedDate,
        isCompleted: false,
        doctor: doctor,
        reason: reason,
      };

      // Add the new appointment to the data
      const updatedData = [...data, newAppointment];
      setData(updatedData);

      // Update appointments in local storage
      localStorage.setItem("appointments", JSON.stringify(updatedData));

      setNewPatientName("");
      setNewDate("");
    }
  };

  return (
    <div className="add-patient ">
      <button
        className="back-btn btn border-0 d-flex align-items-center justify-content-between"
        onClick={goBack}
      >
        <PiArrowFatLinesLeftFill /> All Appointments
      </button>
      <h4 className="mt-5 mb-4 text-center border-bottom mx-3 p-2 w-50 mx-auto">
        {doctor}
      </h4>
      <Card className="card-doctor" key={idDoctor}>
        <Card.Img
          variant="top"
          className="card-img"
          src={image}
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={(e) => handleMouseOut(e)}
        />
        <Card.Body>
          <Card.Title>{doctor}</Card.Title>
          <Card.Text>
            Department :{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "rgba(13, 142, 237, 0.8)",
                fontWeight: "bold",
              }}
            >
              {department}
            </span>
          </Card.Text>
          <Card.Text>{resume}</Card.Text>
        </Card.Body>
      </Card>
      <h4 className="mt-5 mb-4 text-center border-bottom mx-3 p-2 w-50 mx-auto">
        All Appointments of {doctor}
      </h4>
      <div className="appointment-management d-flex justify-content-center ">
        <form onSubmit={handleSubmit} className="form-control w-50 text-center">
          <h5 className="text-center border-bottom w-75 m-auto">
            Create a new patient appointment
          </h5>
          <div className="name mt-2">
            <label htmlFor="fullname">Fullname</label>
            <br />
            <input
              type="text"
              id="fullname"
              required
              onChange={(e) => setNewPatientName(e.target.value)}
              value={newPatientName}
            />
          </div>
          <div className="time mt-2">
            <label htmlFor="time">Day & Time</label>
            <br />
            <input
              type="datetime-local"
              id="time"
              required
              onChange={(e) => setNewDate(e.target.value)}
              value={newDate}
            />
          </div>
          <div className="reason mt-2">
            <label htmlFor="reason">Reason</label>
            <br />
            <select id="reason">
              <option value="Check-up">
                CHECKUP - A routine check-up, such as an annual physical
              </option>
              <option value="Emergency">
                EMERGENCY - Emergency appointment
              </option>
              <option value="Follow-up">
                FOLLOWUP - A follow up visit from a previous appointment
              </option>
              <option value="Routine">ROUTINE - Routine appointment</option>
              <option value="Walkin">
                WALKIN - A previously unscheduled walk-in visit
              </option>
            </select>
          </div>
          <div className="submit text-center">
            <button type="submit" className="submit-btn">
              Create
            </button>
          </div>
        </form>
        <Row className="doc-patients text-center mb-5 ms-4 justify-content-center align-items-center g-3 pb-3 w-50">
          {Array.isArray(data) && data.length > 0 ? (
            data
              .filter((a) => a.doctor === doctor)
              .map((patients) => {
                const {
                  id,
                  patient,
                  appointment,
                  isCompleted,
                  doctor,
                  reason,
                } = patients;
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
              })
          ) : (
            <p className="no-item">No appointments found</p>
          )}
        </Row>
      </div>
    </div>
  );
};

export default AddPatient;

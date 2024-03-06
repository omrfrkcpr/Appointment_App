import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
import "./PatientList.css";

const PatientList = ({ doctors, toggle, data, setData }) => {
  // Toggle appointment status
  const handleIsCompleted = (id) => {
    setData((prevData) => {
      return prevData.map((patient) => {
        if (patient.id === id) {
          return { ...patient, isCompleted: !patient.isCompleted };
        }
        return patient;
      });
    });
  };

  // Delete appointment from database
  const handleDelete = (id, patient) => {
    if (
      window.confirm(
        `${patient}'s Appointment will be permanently deleted. Are you sure?`
      )
    )
      setData((prevData) => prevData.filter((patient) => patient.id !== id));
  };

  const toggleTextDecoration = (isCompleted) => {
    return isCompleted ? "line-through" : "none";
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
            <Card key={id} style={{ width: "5rem", height: "18rem" }}>
              <button
                className="deleteBtn border-0 text-end w-25 ms-auto bg-white"
                style={{ width: "50px" }}
                onClick={() => handleDelete(id, patient)}
              >
                <TiDelete style={{ color: "red", fontSize: "25px" }} />
              </button>
              <Card.Header
                style={{
                  textDecoration: toggleTextDecoration(isCompleted),
                  width: "70%",
                  margin: "auto",
                }}
              >
                {patient}
              </Card.Header>
              <Card.Body>
                <Card.Text
                  style={{ textDecoration: toggleTextDecoration(isCompleted) }}
                >
                  {doctor}
                </Card.Text>
                <Card.Title
                  style={{ textDecoration: toggleTextDecoration(isCompleted) }}
                >
                  Date :{" "}
                  <span style={{ color: isCompleted ? "green" : "orange" }}>
                    {appointment}
                  </span>
                </Card.Title>
                <Card.Title
                  style={{ textDecoration: toggleTextDecoration(isCompleted) }}
                >
                  Reason:{" "}
                  <span style={{ color: isCompleted ? "green" : "orange" }}>
                    {reason}
                  </span>
                </Card.Title>
                <div className="buttons d-flex justify-content-center">
                  <Button
                    style={{ backgroundColor: "#3da4f0" }}
                    className="text-center btn-update"
                  >
                    Update
                  </Button>
                  <Button
                    style={{
                      backgroundColor: isCompleted ? "green" : "orange",
                      border: "none",
                      color: isCompleted ? "white" : "black",
                    }}
                    className="text-center btn-status"
                    onClick={() => handleIsCompleted(id)}
                  >
                    Status : {isCompleted ? "Completed" : "Pending"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </>
  );
};

export default PatientList;

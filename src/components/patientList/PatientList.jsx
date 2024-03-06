import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { FaDeleteLeft } from "react-icons/fa6";
import "./PatientList.css";

const PatientList = ({ doctors, toggle, data, setData }) => {
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

  return (
    <>
      <h3 className="title">Appointment Management System (AMS)</h3>
      <Row className="text-center m-auto cards">
        {doctors.map((doc) => {
          const { idDoctor, doctor, department, image } = doc;
          return (
            <Card style={{ width: "13rem" }} className="card" key={idDoctor}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{doctor}</Card.Title>
                <Card.Text>{department}</Card.Text>
                <Button
                  onClick={toggle}
                  variant="primary"
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
      <Row className="appointments text-center mb-5 justify-content-center align-items-center g-3">
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
                <FaDeleteLeft style={{ color: "red", width: "20px" }} />
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
                <div className="buttons d-flex justify-content-center w-75">
                  <Button variant="info" className="text-center me-2">
                    Update
                  </Button>
                  <Button
                    style={{
                      backgroundColor: isCompleted ? "green" : "orange",
                      border: "none",
                    }}
                    className="text-center"
                    onClick={() => handleIsCompleted(id)}
                  >
                    {isCompleted ? "Done" : "Pending"}
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

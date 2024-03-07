import React from "react";
import { Card, Button } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";

const AppointmentCard = ({
  id,
  patient,
  doctor,
  appointment,
  reason,
  isCompleted,
  handleDelete,
  handleIsCompleted,
}) => {
  const toggleTextDecoration = (isCompleted) => {
    return isCompleted ? "line-through" : "none";
  };

  return (
    <Card style={{ width: "5rem", height: "18rem" }}>
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
};

export default AppointmentCard;

import React from "react";

const Time = () => {
  // Local Time
  const formattedDate = (currentDate) => {
    const options = {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(currentDate);
  };

  const updateDateTime = () => {
    console.log(formattedDate(new Date()));
  };
  setTimeout(updateDateTime, 60000); // 60000 milliseconds = 1 minute
  return (
    <p className="m-3 fw-bold" style={{ textDecoration: "underline" }}>
      {formattedDate(new Date())}
    </p>
  );
};

export default Time;

import React, { useState } from "react";
import initialData from "../helpers/data";
import initialDoctors from "../helpers/doctors";
import AddPatient from "../components/addPatient/AddPatient";
import PatientList from "../components/patientList/PatientList";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const [togglePage, setTogglePage] = useState(true);
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("appointments")) || initialData
  );
  const [doctors, setDoctors] = useState(initialDoctors);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const toggleComponent = (doctorName) => {
    setTogglePage(false);
    const selectedDoctor = doctors.find((doc) => doc.doctor === doctorName);
    // setDoctors([selectedDoctor]);
    setSelectedDoctor(selectedDoctor);
    setData(data.filter((patient) => patient.doctor === doctorName));
  };

  const goBack = () => {
    setTogglePage(true);
    setDoctors(initialDoctors);
    setData(initialData);
  };

  return (
    <div>
      <Navbar />
      {togglePage ? (
        <PatientList
          data={data}
          setData={setData}
          doctors={doctors}
          toggle={toggleComponent}
        />
      ) : (
        <AddPatient
          targetData={data}
          targetSetData={setData}
          targetDoctor={selectedDoctor}
          toggle={toggleComponent}
          goBack={goBack}
        />
      )}
    </div>
  );
};

export default Home;

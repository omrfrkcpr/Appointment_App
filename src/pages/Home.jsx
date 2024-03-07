import React, { useState } from "react";
import initialData from "../helpers/data";
import initialDoctors from "../helpers/doctors";
import AddPatient from "../components/addPatient/AddPatient";
import PatientList from "../components/patientList/PatientList";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const [togglePage, setTogglePage] = useState(true);
  const [data, setData] = useState(
    localStorage.setItem("appointments", JSON.stringify(initialData)) ||
      initialData
  );
  const [doctors, setDoctors] = useState(initialDoctors);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  // const [selectedData, setSelectedData] = useState(null);

  const toggleComponent = (doctorName) => {
    setTogglePage(false);

    const selectedDoctor = doctors.find((doc) => doc.doctor === doctorName);
    // setDoctors([selectedDoctor]);
    setSelectedDoctor(selectedDoctor);

    const selectedData = data.filter(
      (patient) => patient.doctor === doctorName
    );
    setData(selectedData);
  };

  const goBack = () => {
    setTogglePage(true);
    setDoctors(initialDoctors);
    // const appointmentsFromStorage =
    //   JSON.parse(localStorage.getItem("appointments")) || initialData;
    // setData(appointmentsFromStorage);
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
          goBack={goBack}
        />
      )}
    </div>
  );
};

export default Home;

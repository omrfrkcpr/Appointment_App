import React, { useState } from "react";
import initialData from "../helpers/data";
import doctors from "../helpers/doctors";
import AddPatient from "../components/addPatient/AddPatient";
import PatientList from "../components/patientList/PatientList";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const [togglePage, setTogglePage] = useState(true);
  const [data, setData] = useState(initialData);

  const toggleComponent = () => {
    setTogglePage(!togglePage);
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
        <AddPatient data={data} doctors={doctors} toggle={toggleComponent} />
      )}
    </div>
  );
};

export default Home;

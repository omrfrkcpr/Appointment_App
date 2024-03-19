# Appointment App

💻 https://medical-center-appointments.netlify.app/

## Description

Project aims to create a Hospital Appointment App.

## Outcome 🎦

![appointment-app](https://github.com/omrfrkcpr/Appointment_App/assets/77440899/0b5ac3e1-9909-4812-9e21-88ffe911a7ad)

## Project Planning & Management

**Epic User Story:** Build an interactive two-pages Appointment Application 🎖️

**User Stories:**

1️⃣ **View Doctors:**

- 🥇 Create a page to display the list of doctors, including their name, specialty, and available appointment hours.
- 🥈 Filter doctor information from Data.js and pass it to the doctor list page.

2️⃣ **View Appointments:**

- 🥇 Develop a page to display the selected doctor's appointment list, showing appointment date, time, and patient name.
- 🥈 Retrieve appointment information for the selected doctor from Data.js and display it on the appointment list page.

3️⃣ **Add Patient:**

- 🥇 Design a form page to add a new patient to a selected doctor's appointments, with fields for patient name, date, and time selection.
- 🥈 Generate a new appointment using the information from the add patient form and add it to the appointment list of the selected doctor.

4️⃣ **Data Management:**

- 🥇 Develop functions to update data, such as adding a new appointment, and set up functions to access Data.js and local storage.
- 🥈 Implement functions to update both Data.js and local storage when a new appointment is added.

**Additional Requirement:** 💥

- The application should have a responsive design.

## Project Skeleton 🩻

```
Appointment App(folder)
|
├── public
|     ├── index.html
│     └── manifest.json
├── src
│    ├── assets
│    ├── components
│    │       ├── addPatient
│    │       │        ├── AddPatient.css
│    │       │        └── AddPatient.jsx
│    │       ├── appointmentCard
│    │       │        ├── AppointmentCard.css
|    |       |        └── AppointmentCard.jsx
│    │       ├── navbar
│    │       │        ├── Navbar.css
|    |       |        └── Navbar.jsx
│    │       └── patientList
│    │                ├── PatientList.css
|    |                └── PatientList.jsx
│    ├── helper
│    │       ├── data.js
│    │       └── doctors.js
│    ├── pages
│    │       └── Home.jsx
│    ├── App.js
│    ├── index.css
│    └── index.js
│
├── .gitignore
├── appointment-app.gif
├── LICENSE
├── package.lock.json
├── package.json
└── README.md
```

## Objective

Build a Hospital Appointment App using ReactJS.

### At the end of the project, following topics are to be covered;

- HTML

- CSS

- JS

- ReactJS

### At the end of the project, students will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Additional Data 📦

- [data.js](src/helpers/data.js)
- [doctors.js](src/helpers/doctors.js)
- [assets](src/assets)

## Contributing 🤝

Your insights and contributions greatly enrich my projects! Whether you're bursting with fresh project concepts or have ideas to enhance existing ones, your input is invaluable. Feel free to open an issue to initiate a dialogue about your thoughts, or submit a pull request with your proposed modifications. Every contribution plays a vital role in my growth and improvement, so thank you for being an integral part of my community!

## LICENSE 🪪

This repository is licensed under the Apache Version 2.0 License. See the GPL licence file for details. For more information please visit this page http://www.apache.org/licenses/.

<p align="center"><strong>&#9786; Happy Coding &#9997;</strong></p>

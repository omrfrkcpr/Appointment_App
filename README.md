# Appointment App

## Description

Project aims to create a Hospital Appointment App.

## Project Planning & Management

**Epic User Story:** Build an interactive two-pages Appointment Application

**User Stories:**

1. **View Doctors:**
   Task-1 = Create a page to display the list of doctors, including their name, specialty, and available appointment hours.
   Task-2 = Fetch doctor information from Data.js and pass it to the doctor list page.

2. **View Appointments:**
   Task-1 = Develop a page to display the selected doctor's appointment list, showing appointment date, time, and patient name.
   Task-2 = Retrieve appointment information for the selected doctor from Data.js and display it on the appointment list page.

3. **Add Patient:**
   Task-1 = Design a form page to add a new patient to a selected doctor's appointments, with fields for patient name, date, and time selection.
   Task-2 = Generate a new appointment using the information from the add patient form and add it to the appointment list of the selected doctor.

4. **Data Management:**
   Task-1 = Develop functions to update data, such as adding a new appointment, and set up functions to access Data.js and local storage.
   Task-2 = Implement functions to update both Data.js and local storage when a new appointment is added.

**Additional Requirement:**

- The application should have a responsive design.

## Project Skeleton

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
|    |       |
│    │       └── patientList
│    │                ├── PatientList.css
|    |                └── PatientList.jsx
│    ├── helper
│    │       ├── data.js
│    │       └── Home.jsx
│    │
│    ├── App.css
│    ├── App.js
│    ├── index.css
│    └── index.js
├── .gitignore
├── LICENSE
├── package.lock.json
├── package.json
└── README.md
```

## Expected Outcome

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

## Additional Data

- [data.js](./helpers/data.js)
- [assets](../src/assets)

<p align="center"><strong>&#9786; Happy Coding &#9997;</strong></p>

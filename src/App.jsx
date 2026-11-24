
import { useState } from "react";
import { Routes, Route } from "react-router";

import doctorsData from "./data/doctors";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Appointments from "./pages/Appointments";

function App() {

  const [doctors, setDoctors] = useState(doctorsData);

  // Book Appointment
  const handleBook = (id) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doctor) => {
        if (
          doctor.id === id &&
          doctor.isAvailableToday &&
          doctor.availableSlots > 0 &&
          !doctor.isBooked
        ) {
          return {
            ...doctor,
            isBooked: true,
            availableSlots: doctor.availableSlots - 1
          };
        }

        return doctor;
      })
    );
  };

  // Cancel Appointment
  const handleCancel = (id) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doctor) => {
        if (doctor.id === id && doctor.isBooked) {
          return {
            ...doctor,
            isBooked: false,
            availableSlots: doctor.availableSlots + 1
          };
        }

        return doctor;
      })
    );
  };

  return (
    <>
      <Navbar
        bookedCount={doctors.filter(
          (doctor) => doctor.isBooked
        ).length}
      />

      <Routes>
        <Route
          path="/"
          element={<Home doctors={doctors} />}
        />

        <Route
          path="/doctors"
          element={
            <Doctors
              doctors={doctors}
              onBook={handleBook}
              onCancel={handleCancel}
            />
          }
        />

        <Route
          path="/doctors/:id"
          element={
            <DoctorDetails
              doctors={doctors}
              onBook={handleBook}
              onCancel={handleCancel}
            />
          }
        />

        <Route
          path="/appointments"
          element={
            <Appointments
              doctors={doctors}
              onBook={handleBook}
              onCancel={handleCancel}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

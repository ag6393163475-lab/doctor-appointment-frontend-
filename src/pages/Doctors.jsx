
import { useState } from "react";
import DoctorCard from "../components/DoctorCard";

function Doctors({ doctors, onBook, onCancel }) {
  const [specialization, setSpecialization] = useState("All");

  const filteredDoctors = doctors.filter((doctor) => {
    return (
      specialization === "All" ||
      doctor.specialization === specialization
    );
  });

  return (
    <div>
      <h1>Our Doctors</h1>

      <label>Filter by Specialization: </label>

      <select
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Orthopedic">Orthopedic</option>
        <option value="Pediatrician">Pediatrician</option>
        <option value="Dentist">Dentist</option>
      </select>

      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBook={onBook}
              onCancel={onCancel}
            />
          ))
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  );
}

export default Doctors;

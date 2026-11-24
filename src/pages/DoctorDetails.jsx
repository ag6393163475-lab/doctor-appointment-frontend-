
import { useParams } from "react-router";

function DoctorDetails({ doctors, onBook, onCancel }) {
  const { id } = useParams();

  const doctor = doctors.find(
    (d) => String(d.id) === id
  );

  if (!doctor) {
    return <h2>Doctor not found</h2>;
  }

  return (
    <div className="doctor-details">
      <h1>{doctor.name}</h1>

      <p>Specialization: {doctor.specialization}</p>
      <p>Experience: {doctor.experience} years</p>
      <p>Consultation Fee: ₹{doctor.fee}</p>
      <p>Rating: ⭐ {doctor.rating}</p>
      <p>Hospital: {doctor.hospital}</p>
      <p>Available Slots: {doctor.availableSlots}</p>

      <p>
        {doctor.isAvailableToday
          ? "Available Today"
          : "Not Available Today"}
      </p>

      {doctor.isBooked ? (
        <button onClick={() => onCancel(doctor.id)}>
          Cancel Appointment
        </button>
      ) : !doctor.isAvailableToday ? (
        <p>Not Available Today</p>
      ) : doctor.availableSlots === 0 ? (
        <p>No Slots Left</p>
      ) : (
        <button onClick={() => onBook(doctor.id)}>
          Book Appointment
        </button>
      )}
    </div>
  );
}

export default DoctorDetails;

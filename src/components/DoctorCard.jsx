
import { Link } from "react-router";

function DoctorCard({ doctor, onBook, onCancel }) {
  return (
    <div className="doctor-card">
      <h3>{doctor.name}</h3>
      <p>Specialization: {doctor.specialization}</p>
      <p>Experience: {doctor.experience} years</p>
      <p>Fee: ₹{doctor.fee}</p>
      <p>Rating: ⭐ {doctor.rating}</p>
      <p>
        {doctor.isAvailableToday && doctor.availableSlots > 0
          ? "Available Today"
          : "Not Available"}
      </p>
      {doctor.experience >= 10 && (
        <p>Senior Doctor</p>
      )}

      <Link to={`/doctors/${doctor.id}`}>
        View Details
      </Link>

      <div>
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
    </div>
  );
}

export default DoctorCard;


import DoctorCard from "../components/DoctorCard";

function Appointments({ doctors, onBook, onCancel }) {
  const bookedDoctors = doctors.filter(
    (doctor) => doctor.isBooked
  );

  const totalFee = bookedDoctors.reduce(
    (total, doctor) => total + doctor.fee,
    0
  );

  return (
    <div>
      <h1>My Appointments</h1>

      {bookedDoctors.length > 0 ? (
        <>
          <div className="doctor-list">
            {bookedDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onBook={onBook}
                onCancel={onCancel}
              />
            ))}
          </div>

          <h2>Total Consultation Fee: ₹{totalFee}</h2>
        </>
      ) : (
        <h3>No appointments booked</h3>
      )}
    </div>
  );
}

export default Appointments;

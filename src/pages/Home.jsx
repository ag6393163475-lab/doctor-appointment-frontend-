
function Home({ doctors }) {
  const totalDoctors = doctors.length;

  const availableDoctors = doctors.filter(
    (doctor) =>
      doctor.isAvailableToday && doctor.availableSlots > 0
  ).length;

  const bookedAppointments = doctors.filter(
    (doctor) => doctor.isBooked
  ).length;

  return (
    <div>
      <h1>Welcome to Doctor Appointment System</h1>

      <div className="stats">
        <div>
          <h2>{totalDoctors}</h2>
          <p>Total Doctors</p>
        </div>

        <div>
          <h2>{availableDoctors}</h2>
          <p>Doctors Available Today</p>
        </div>

        <div>
          <h2>{bookedAppointments}</h2>
          <p>Booked Appointments</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useBookingContext } from '../context/BookingContext.jsx';

const mockDistance = 210;

const generateBookingId = () => `GR-${Math.floor(Date.now() / 1000).toString(36).toUpperCase()}-${Math.floor(Math.random() * 9000 + 1000)}`;

function BookingSummary() {
  const navigate = useNavigate();
  const { booking, selectedVehicle, setConfirmation } = useBookingContext();
  const pricePerKm = selectedVehicle?.pricePerKm ?? 0;
  const driverAllowance = selectedVehicle?.driverAllowance ?? 0;
  const totalFare = Math.round(mockDistance * pricePerKm + driverAllowance);

  const handleConfirm = () => {
    const bookingId = generateBookingId();
    const bookingRecord = {
      bookingId,
      pickup: booking.pickup,
      drop: booking.drop,
      date: booking.date,
      time: booking.time,
      passengers: booking.passengers,
      vehicle: selectedVehicle?.name,
      fare: totalFare,
      status: 'Confirmed',
      tripType: booking.tripType,
      createdAt: new Date().toISOString(),
    };

    setConfirmation(bookingRecord);
    const existing = JSON.parse(localStorage.getItem('goride-bookings') || '[]');
    localStorage.setItem('goride-bookings', JSON.stringify([bookingRecord, ...existing]));
    navigate('/confirmation');
  };

  return (
    <>
      <Navbar />
      <section className="content-section page-section">
        <div className="container booking-summary-box">
          <span className="eyebrow accent">Booking summary</span>
          <h2>Review your reservation</h2>

          <div className="summary-grid">
            <div>
              <p><strong>Trip type:</strong> {booking.tripType}</p>
              <p><strong>Pickup:</strong> {booking.pickup}</p>
              <p><strong>Drop:</strong> {booking.drop}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Passengers:</strong> {booking.passengers}</p>
            </div>
            <div>
              <p><strong>Vehicle:</strong> {selectedVehicle?.name}</p>
              <p><strong>Distance:</strong> {mockDistance} km</p>
              <p><strong>Price per km:</strong> ₹{pricePerKm}</p>
              <p><strong>Driver allowance:</strong> ₹{driverAllowance}</p>
              <p><strong>Total estimated fare:</strong> ₹{totalFare}</p>
            </div>
          </div>

          <button type="button" className="btn btn-primary" onClick={handleConfirm}>
            Confirm Booking
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BookingSummary;

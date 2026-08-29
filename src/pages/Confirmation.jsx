import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useBookingContext } from '../context/BookingContext.jsx';

function Confirmation() {
  const { confirmation } = useBookingContext();
  const bookingInfo = confirmation || {
    bookingId: 'GR-12345',
    vehicle: 'Sedan',
    pickup: 'Madurai',
    drop: 'Rameshwaram',
    date: '2026-08-30',
    time: '08:30',
    passengers: 2,
    fare: 3999,
    status: 'Confirmed',
  };

  return (
    <>
      <Navbar />
      <section className="content-section page-section">
        <div className="container confirmation-card">
          <span className="eyebrow accent">Booking confirmed</span>
          <h2>Booking Confirmed!</h2>
          <div className="confirmation-details">
            <p><strong>Booking ID:</strong> {bookingInfo.bookingId}</p>
            <p><strong>Vehicle:</strong> {bookingInfo.vehicle}</p>
            <p><strong>Pickup:</strong> {bookingInfo.pickup}</p>
            <p><strong>Drop:</strong> {bookingInfo.drop}</p>
            <p><strong>Date:</strong> {bookingInfo.date}</p>
            <p><strong>Time:</strong> {bookingInfo.time}</p>
            <p><strong>Passengers:</strong> {bookingInfo.passengers}</p>
            <p><strong>Total fare:</strong> ₹{bookingInfo.fare}</p>
            <p><strong>Status:</strong> {bookingInfo.status}</p>
          </div>

          <div className="confirmation-actions">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
            <Link to="/booking" className="btn btn-secondary">View Booking</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Confirmation;

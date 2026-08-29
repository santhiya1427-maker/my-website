import { Link } from 'react-router-dom';
import { useBookingContext } from '../context/BookingContext.jsx';

function BookingConfirmation() {
  const { booking, selectedVehicle, confirmation } = useBookingContext();
  const current = confirmation || {
    bookingId: 'GR-00001',
    vehicle: selectedVehicle?.name || 'Sedan',
    pickup: booking?.pickup || 'Madurai',
    drop: booking?.drop || 'Rameshwaram',
    date: booking?.date || '2026-08-30',
    time: booking?.time || '08:30',
    passengers: booking?.passengers || 2,
    fare: 3999,
    status: 'Confirmed',
  };

  return (
    <div className="container confirmation-card">
      <span className="eyebrow accent">Booking confirmed</span>
      <h2>Booking Confirmed!</h2>
      <div className="confirmation-details">
        <p><strong>Booking ID:</strong> {current.bookingId}</p>
        <p><strong>Vehicle:</strong> {current.vehicle}</p>
        <p><strong>Pickup:</strong> {current.pickup}</p>
        <p><strong>Drop:</strong> {current.drop}</p>
        <p><strong>Date:</strong> {current.date}</p>
        <p><strong>Time:</strong> {current.time}</p>
        <p><strong>Passengers:</strong> {current.passengers}</p>
        <p><strong>Total fare:</strong> ₹{current.fare}</p>
      </div>
      <div className="confirmation-actions">
        <Link to="/" className="btn btn-primary">Back to Home</Link>
        <Link to="/booking" className="btn btn-secondary">View Booking</Link>
      </div>
    </div>
  );
}

export default BookingConfirmation;

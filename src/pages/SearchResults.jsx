import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import vehicles from '../data/vehicles.js';
import { useBookingContext } from '../context/BookingContext.jsx';

const mockDistance = 210;

function SearchResults() {
  const navigate = useNavigate();
  const { booking, selectedVehicle, setSelectedVehicle, setConfirmation } = useBookingContext();

  const handleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
    const fare = Math.round(mockDistance * vehicle.pricePerKm + vehicle.driverAllowance);
    setConfirmation((prev) => ({
      ...prev,
      vehicle: vehicle.name,
      fare,
    }));
    navigate('/booking-summary');
  };

  return (
    <>
      <Navbar />
      <section className="content-section page-section">
        <div className="container">
          <div className="section-heading left-align">
            <span className="eyebrow accent">Search results</span>
            <h2>Available rides for your trip</h2>
          </div>

          <div className="summary-strip">
            <div><span>Pickup</span><strong>{booking.pickup || 'Not provided'}</strong></div>
            <div><span>Drop</span><strong>{booking.drop || 'Not provided'}</strong></div>
            <div><span>Date</span><strong>{booking.date || 'Not provided'}</strong></div>
            <div><span>Time</span><strong>{booking.time || 'Not provided'}</strong></div>
            <div><span>Passengers</span><strong>{booking.passengers || '0'}</strong></div>
            <div><span>Trip type</span><strong>{booking.tripType || 'One Way'}</strong></div>
          </div>

          <div className="vehicles-grid vehicles-grid-page">
            {vehicles.map((vehicle) => {
              const fare = Math.round(mockDistance * vehicle.pricePerKm + vehicle.driverAllowance);
              return (
                <article key={vehicle.id} className={`vehicle-card ${selectedVehicle?.id === vehicle.id ? 'selected' : ''}`}>
                  <img src={vehicle.image} alt={vehicle.name} />
                  <div className="vehicle-card-body">
                    <div className="vehicle-card-header">
                      <h3>{vehicle.name}</h3>
                      <span className="vehicle-tag">{vehicle.seats} seats</span>
                    </div>
                    <ul className="vehicle-meta">
                      <li>AC: {vehicle.ac ? 'Yes' : 'No'}</li>
                      <li>₹{vehicle.pricePerKm}/km</li>
                      <li>Min {vehicle.minimumKm} km</li>
                      <li>Driver allowance: ₹{vehicle.driverAllowance}</li>
                    </ul>
                    <div className="vehicle-price-row">
                      <span>Estimated fare</span>
                      <strong>₹{fare}</strong>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => handleSelect(vehicle)}>
                      Select Vehicle
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SearchResults;

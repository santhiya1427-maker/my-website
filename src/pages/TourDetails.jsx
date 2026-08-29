import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import tourPackages from '../data/tourPackages.js';
import vehicles from '../data/vehicles.js';
import { useBookingContext } from '../context/BookingContext.jsx';

function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setBooking, setSelectedVehicle } = useBookingContext();
  const tour = tourPackages.find((item) => item.id === id) || tourPackages[0];

  const handleBookTour = () => {
    const defaultVehicle = vehicles[0];
    setSelectedVehicle(defaultVehicle);
    setBooking((prev) => ({
      ...prev,
      packageName: tour.destination,
      tripType: 'One Way',
      route: `${tour.destination}`,
    }));
    navigate('/booking');
  };

  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: `linear-gradient(135deg, rgba(15,95,74,0.85), rgba(31,42,55,0.8)), url(${tour.image})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', minHeight: '320px' }}>
        <div className="container" style={{ paddingTop: '100px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginBottom: '12px' }}>{tour.destination}</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: '600px' }}>{tour.description}</p>
        </div>
      </section>
      <section className="content-section page-section">
        <div className="container compact-panel">
          <div className="summary-grid">
            <div>
              <span className="eyebrow accent">Tour Details</span>
              <p><strong>Duration:</strong> {tour.days}</p>
              <p><strong>Price Starting from:</strong> <span style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', fontWeight: 'bold' }}>₹{tour.price}</span></p>
            </div>
            <div>
              <span className="eyebrow accent">What's Included</span>
              <p>✓ Professional driver familiar with the route</p>
              <p>✓ Air-conditioned taxi for comfort</p>
              <p>✓ Flexible itinerary with sightseeing stops</p>
              <p>✓ 24/7 customer support</p>
            </div>
          </div>
          <div style={{ marginTop: '28px', padding: '18px', background: 'var(--primary-soft)', borderRadius: '16px', display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <p style={{ margin: 0, color: 'var(--primary-dark)', fontWeight: '600' }}>Ready to explore this amazing destination?</p>
            <button type="button" className="btn btn-primary" style={{ margin: 0 }} onClick={handleBookTour}>
              Book This Tour
            </button>
          </div>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Link to="/tour-packages" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.95rem' }}>← Back to Tour Packages</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TourDetails;

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('goride-bookings') || '[]');
      setBookings(stored);
    } catch {
      setBookings([]);
    }
  }, []);

  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed', minHeight: '280px' }}>
        <div className="container" style={{ paddingTop: '80px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginBottom: '12px' }}>My Bookings</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: '600px' }}>View and manage your GoRide Taxi reservations</p>
        </div>
      </section>
      <section className="content-section page-section">
        <div className="container compact-panel">
          {bookings.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '20px' }}>No bookings yet. Start by planning your first trip.</p>
              <a href="/" className="btn btn-primary">Book Now</a>
            </div>
          ) : (
            <>
              <h2 style={{ marginBottom: '20px' }}>Your Recent Bookings ({bookings.length})</h2>
              <div className="vehicles-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                {bookings.map((booking) => (
                  <div key={booking.bookingId} className="vehicle-card" style={{ padding: '20px' }}>
                    <div className="vehicle-card-body" style={{ padding: '0' }}>
                      <h3 style={{ fontSize: '1rem', marginBottom: '12px' }}>{booking.bookingId}</h3>
                      <ul className="vehicle-meta" style={{ gridTemplateColumns: '1fr', marginBottom: '14px' }}>
                        <li><strong>Trip:</strong> {booking.tripType}</li>
                        <li><strong>From:</strong> {booking.pickup}</li>
                        <li><strong>To:</strong> {booking.drop}</li>
                        <li><strong>Date:</strong> {booking.date}</li>
                        <li><strong>Vehicle:</strong> {booking.vehicle}</li>
                      </ul>
                      <div className="vehicle-price-row">
                        <span>Fare</span>
                        <strong style={{ fontSize: '1.3rem' }}>₹{booking.fare}</strong>
                      </div>
                      <p style={{ margin: '12px 0 0', padding: '8px', background: 'var(--primary-soft)', borderRadius: '6px', color: 'var(--primary-dark)', fontWeight: '600', textAlign: 'center', fontSize: '0.9rem' }}>{booking.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MyBookings;

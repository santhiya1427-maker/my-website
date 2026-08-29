import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

function AirportTaxi() {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1556092252-446c598799e3?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed', minHeight: '340px' }}>
        <div className="container" style={{ paddingTop: '100px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '16px' }}>Airport Transfer</h1>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.15rem', maxWidth: '700px', lineHeight: '1.6' }}>Reliable airport rides from pickup to departure. Travel with peace of mind using our flight-aware scheduling and professional cab service.</p>
        </div>
      </section>
      <section className="content-section page-section">
        <div className="container">
          <div className="summary-grid">
            <div>
              <span className="eyebrow accent">Flight-Aware Service</span>
              <h3>Smart Timing</h3>
              <p>Share your flight details and we'll calculate perfect pickup time considering traffic patterns and check-in requirements.</p>
            </div>
            <div>
              <span className="eyebrow accent">Stress-Free Travel</span>
              <h3>Professional Drivers</h3>
              <p>Experienced drivers who know airport routes well. Real-time tracking and customer support available throughout your journey.</p>
            </div>
          </div>
          <div style={{ marginTop: '28px', padding: '24px', background: 'var(--primary-soft)', borderRadius: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px', marginBottom: '20px' }}>
              <div>
                <p style={{ margin: '0 0 8px', color: 'var(--primary-dark)', fontWeight: '700' }}>✈ Departure Ride</p>
                <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.9rem' }}>Pre-book from home to airport</p>
              </div>
              <div>
                <p style={{ margin: '0 0 8px', color: 'var(--primary-dark)', fontWeight: '700' }}>✈ Arrival Ride</p>
                <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.9rem' }}>Quick pickup after flight landing</p>
              </div>
              <div>
                <p style={{ margin: '0 0 8px', color: 'var(--primary-dark)', fontWeight: '700' }}>📱 Real-Time Tracking</p>
                <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.9rem' }}>Track your driver's location anytime</p>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '14px', fontSize: '1.05rem' }}>Book your airport transfer now</p>
              <a href="/" className="btn btn-primary">Book Airport Ride</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AirportTaxi;

import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

function RoundTrip() {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed', minHeight: '340px' }}>
        <div className="container" style={{ paddingTop: '100px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '16px' }}>Round Trip Taxi</h1>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.15rem', maxWidth: '700px', lineHeight: '1.6' }}>Plan your return journey without worry. Single booking for both directions with flexible return time and transparent pricing for your convenience.</p>
        </div>
      </section>
      <section className="content-section page-section">
        <div className="container">
          <div className="summary-grid">
            <div>
              <span className="eyebrow accent">Round Trip Benefits</span>
              <h3>One Booking, Both Ways</h3>
              <p>Book pickup and drop in a single transaction. Choose flexible return time and enjoy hassle-free travel planning.</p>
            </div>
            <div>
              <span className="eyebrow accent">Great Savings</span>
              <h3>Better Pricing</h3>
              <p>Save up to 15% on round trip bookings compared to two separate one-way rides. Transparent pricing with no hidden charges.</p>
            </div>
          </div>
          <div style={{ marginTop: '28px', textAlign: 'center', padding: '24px', background: 'var(--primary-soft)', borderRadius: '16px' }}>
            <p style={{ color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '14px', fontSize: '1.05rem' }}>Plan your round trip today</p>
            <a href="/" className="btn btn-primary">Book Round Trip</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default RoundTrip;

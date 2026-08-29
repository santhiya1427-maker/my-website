import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

function OneWay() {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed', minHeight: '340px' }}>
        <div className="container" style={{ paddingTop: '100px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '16px' }}>One Way Taxi</h1>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.15rem', maxWidth: '700px', lineHeight: '1.6' }}>Flexible single-direction rides with premium comfort. Book a one-way trip to your destination with transparent rates, courteous drivers, and punctual service across the city and beyond.</p>
        </div>
      </section>
      <section className="content-section page-section">
        <div className="container">
          <div className="summary-grid">
            <div>
              <span className="eyebrow accent">Why Choose One Way?</span>
              <h3>Flexible & Affordable</h3>
              <p>No commitment for a return journey. Pay only for the one-way trip you need, perfect for point-to-point travels.</p>
            </div>
            <div>
              <span className="eyebrow accent">Our Service</span>
              <h3>Professional Drivers</h3>
              <p>All our drivers are trained, verified, and courteous. Your safety and comfort are our top priorities.</p>
            </div>
          </div>
          <div style={{ marginTop: '28px', textAlign: 'center', padding: '24px', background: 'var(--primary-soft)', borderRadius: '16px' }}>
            <p style={{ color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '14px', fontSize: '1.05rem' }}>Ready to book your one-way ride?</p>
            <a href="/" className="btn btn-primary">Book Now</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default OneWay;

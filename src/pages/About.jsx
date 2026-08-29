import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function About() {
  return (
    <>
      <Navbar />
      <section  style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1537521461865-drwfca337017?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed' }}>
        <div style={{ minHeight: '280px', gridTemplateColumns: '1fr', alignItems: 'center', justifyContent: 'center', paddingTop: '0' }}>
          <div className="hero-copy" style={{ maxWidth: '100%'}}>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginTop: '0px', alignItems: 'center', marginLeft: '500px' }}>About GoRide Taxi</h1>
            <p style={{ fontSize: '1.1rem', marginLeft: '450px' }}>Your trusted mobility partner for reliable, safe, and comfortable rides</p>
          </div>
        </div>
      </section>
      <section className="content-section page-section">
        <div className="container compact-panel">
          <div className="section-heading centered-heading">
            <span className="eyebrow accent">Who We Are</span>
            <h2>Simple, safe, and dependable rides</h2>
          </div>

          <div className="summary-grid">
            <div className="feature-card">
              <span className="eyebrow accent">Our Story</span>
              <h3>Made for everyday travel</h3>
              <p>GoRide helps people move around the city with comfort, speed, and trust.</p>
            </div>

            <div className="feature-card">
              <span className="eyebrow accent">Why Us</span>
              <h3>Reliable service, every time</h3>
              <p>We focus on punctual pickups, clean vehicles, and transparent pricing.</p>
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>On-Time</h3>
              <p>Quick pickups and responsible drivers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Safe</h3>
              <p>Professional service with well-maintained cars.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Affordable</h3>
              <p>Fair pricing with no hidden surprises.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;

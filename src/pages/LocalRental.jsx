import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function LocalRental() {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1619405399517-d4b68f0bab38?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed', minHeight: '280px' }}>
        <div className="container" style={{ paddingTop: '80px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginBottom: '12px' }}>Local Rental</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: '600px' }}>Hourly cab rentals for your city errands and meetings</p>
        </div>
      </section>
      <section className="content-section page-section">
        <div className="container compact-panel">
          <div className="summary-grid">
            <div>
              <span className="eyebrow accent">Rental Packages</span>
              <p><strong>4 Hours:</strong> 40 km included — ₹1,199</p>
              <p><strong>8 Hours:</strong> 80 km included — ₹2,199</p>
              <p><strong>12 Hours:</strong> 120 km included — ₹3,199</p>
            </div>
            <div>
              <span className="eyebrow accent">Popular Fleet</span>
              <p><strong>Sedan:</strong> From ₹1,499/4 hrs</p>
              <p><strong>SUV:</strong> From ₹2,299/4 hrs</p>
              <p><strong>Innova:</strong> From ₹2,999/4 hrs</p>
              <p><strong>Tempo Traveller:</strong> From ₹4,499/4 hrs</p>
            </div>
          </div>
          <p style={{ marginTop: '20px', padding: '16px', background: 'var(--primary-soft)', borderRadius: '12px', color: 'var(--primary-dark)', fontWeight: '600', textAlign: 'center' }}>Extra kilometers charged at ₹12–32/km depending on vehicle. Flexible packages available for your needs.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LocalRental;

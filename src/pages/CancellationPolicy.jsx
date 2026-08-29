import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function CancellationPolicy() {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed', minHeight: '280px' }}>
        <div className="container" style={{ paddingTop: '80px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginBottom: '12px' }}>Cancellation Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: '600px' }}>Flexible cancellation with transparent terms</p>
        </div>
      </section>
      <section className="content-section page-section">
        <div className="container compact-panel">
          <div className="summary-grid">
            <div>
              <p><strong>✓ Free cancellation</strong></p>
              <p>Cancel up to 2 hours before your scheduled pickup time with absolutely no charges.</p>
            </div>
            <div>
              <p><strong>⚠ Late cancellation</strong></p>
              <p>50% of the estimated fare applies if cancelled between 0–2 hours before pickup.</p>
            </div>
            <div>
              <p><strong>✗ No-show</strong></p>
              <p>Full trip fare is charged if you don't cancel and miss your scheduled ride.</p>
            </div>
            <div>
              <p><strong>🌦 Force majeure</strong></p>
              <p>During emergencies or severe weather, we may reschedule your ride. You can cancel without penalty in such cases.</p>
            </div>
          </div>
          <p style={{ marginTop: '20px', padding: '16px', background: 'var(--primary-soft)', borderRadius: '12px', color: 'var(--primary-dark)', fontWeight: '600' }}>Need help? Contact our support team at +91 98765 43210 or support@goridetaxi.com</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CancellationPolicy;

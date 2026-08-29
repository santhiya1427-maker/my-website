import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Terms() {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1554224311-beee415c15c7?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed', minHeight: '280px' }}>
        <div className="container" style={{ paddingTop: '80px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginBottom: '12px' }}>Terms & Conditions</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: '600px' }}>Understand our booking policies and service terms</p>
        </div>
      </section>
      <section className="content-section page-section">
        <div className="container compact-panel">
          <div className="summary-grid">
            <div>
              <p><strong>Booking Policy</strong></p>
              <p>All bookings are subject to vehicle availability and route feasibility. Pricing is confirmed only after customer acceptance.</p>
            </div>
            <div>
              <p><strong>Pricing & Changes</strong></p>
              <p>Fares may vary based on route adjustments, traffic, waiting time, and detours. Final charges reflect actual trip conditions.</p>
            </div>
            <div>
              <p><strong>Passenger Conduct</strong></p>
              <p>Passengers must maintain courteous behavior. We reserve the right to cancel rides for unsafe, abusive, or disruptive conduct.</p>
            </div>
            <div>
              <p><strong>Payment & Refunds</strong></p>
              <p>Payment is collected at trip completion. Refunds are issued per our cancellation policy for eligible cancellations.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Terms;

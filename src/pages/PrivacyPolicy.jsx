import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1526628652108-48cf6f87c857?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed', minHeight: '280px' }}>
        <div className="container" style={{ paddingTop: '80px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginBottom: '12px' }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: '600px' }}>Your trust is our priority — learn how we protect your data</p>
        </div>
      </section>
      <section className="content-section page-section">
        <div className="container compact-panel">
          <div className="summary-grid">
            <div>
              <p><strong>Data Collection</strong></p>
              <p>We collect contact details, travel preferences, payment info, and booking history to deliver reliable taxi services and support.</p>
            </div>
            <div>
              <p><strong>Data Usage</strong></p>
              <p>Your information is used for trip coordination, service improvement, customer support, and communication of booking updates.</p>
            </div>
            <div>
              <p><strong>Data Security</strong></p>
              <p>We employ industry-standard encryption and security practices to protect personal information from unauthorized access or misuse.</p>
            </div>
            <div>
              <p><strong>Third Parties</strong></p>
              <p>We do not sell personal data to third parties. Data is shared only with service providers essential to trip delivery.</p>
            </div>
          </div>
          <p style={{ marginTop: '20px', color: 'var(--muted)' }}>For data access requests or privacy concerns, contact support@goridetaxi.com</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;

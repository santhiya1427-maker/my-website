import Navbar from '../components/Navbar.jsx';
import vehicles from '../data/vehicles.js';
import Footer from '../components/Footer.jsx';

function FleetPricing() {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed', minHeight: '280px' }}>
        <div className="container" style={{ paddingTop: '80px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginBottom: '12px' }}>Fleet & Pricing</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: '600px' }}>Find the perfect vehicle for your journey at transparent rates</p>
        </div>
      </section>
      <section className="content-section page-section">
        <div className="container">
          <div className="section-heading centered-heading" style={{ marginTop: '0' }}>
            <h2>Our Premium Vehicle Fleet</h2>
          </div>

          <div className="vehicles-grid vehicles-grid-page">
            {vehicles.map((vehicle) => (
              <article key={vehicle.id} className="vehicle-card">
                <img src={vehicle.image} alt={vehicle.name} />
                <div className="vehicle-card-body">
                  <div className="vehicle-card-header">
                    <h3>{vehicle.name}</h3>
                    <span className="vehicle-tag">{vehicle.seats} seats</span>
                  </div>
                  <ul className="vehicle-meta">
                    <li>AC: {vehicle.ac ? 'Yes' : 'No'}</li>
                    <li>₹{vehicle.pricePerKm}/km</li>
                    <li>Min {vehicle.minimumKm} km</li>
                    <li>Driver allowance: ₹{vehicle.driverAllowance}</li>
                  </ul>
                  <div className="vehicle-price-row">
                    <span>Estimated fare</span>
                    <strong>₹{Math.round(210 * vehicle.pricePerKm + vehicle.driverAllowance)}</strong>
                  </div>
                  <button type="button" className="btn btn-primary">Book Now</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FleetPricing;

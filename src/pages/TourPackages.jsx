import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import tourPackages from '../data/tourPackages.js';
import Footer from '../components/Footer.jsx';

function TourPackagesPage() {
  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed', minHeight: '280px' }}>
        <div className="container" style={{ paddingTop: '80px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginBottom: '12px' }}>Tour Packages</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: '600px' }}>Explore beautiful destinations with our curated tour packages</p>
        </div>
      </section>
      <section className="content-section page-section">
        <div className="container">
          <div className="section-heading centered-heading" style={{ marginTop: '0' }}>
            <h2>Memorable Escapes Across Tamil Nadu</h2>
          </div>

          <div className="tour-grid tour-grid-page">
            {tourPackages.map((tour) => (
              <article key={tour.id} className="tour-card">
                <img src={tour.image} alt={tour.destination} />
                <div className="tour-card-body">
                  <span className="tour-days">{tour.days}</span>
                  <h3>{tour.destination}</h3>
                  <p>{tour.description}</p>
                  <div className="tour-meta">
                    <span>Starting at</span>
                    <strong>₹{tour.price}</strong>
                  </div>
                  <Link to={`/tour/${tour.id}`} className="btn btn-secondary" style={{ display: 'block', textAlign: 'center' }}>
                    View Details
                  </Link>
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

export default TourPackagesPage;

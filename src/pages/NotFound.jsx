import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function NotFound() {
  return (
    <>
      <Navbar />
      <section className="content-section page-section">
        <div className="container compact-panel not-found-box">
          <span className="eyebrow accent">404</span>
          <h2>Page not found</h2>
          <p>The page you are looking for does not exist or has moved.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;

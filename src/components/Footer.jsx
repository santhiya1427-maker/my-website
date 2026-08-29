import { NavLink } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/one-way', label: 'One Way' },
  { to: '/round-trip', label: 'Round Trip' },
  { to: '/fleet-pricing', label: 'Fleet & Pricing' },
  { to: '/local-rental', label: 'Local Rental' },
  { to: '/contact', label: 'Contact' },
];

const services = ['One Way Taxi', 'Airport Transfer', 'Local Rental', 'Corporate Travel'];
const destinations = ['Madurai Local Tour', 'Rameshwaram', 'Kodaikanal', 'Kanyakumari', 'Munnar'];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">MAK</span>
            <span>MAK Tour's and Travel's</span>
          </div>
          <p className="footer-copy">
            Premium taxi and mobility solutions for city rides, airport transfers, and memorable outstation travel.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul className="footer-list">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul className="footer-list">
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Popular Destinations</h3>
          <ul className="footer-list">
            {destinations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact Information</h3>
          <ul className="footer-list contact-list">
            <li><FaPhoneAlt /> +91 8940218878</li>
            <li><FaWhatsapp /> +91 8940218878</li>
            <li><FaEnvelope /> mksamyeee@gmail.com</li>
            <li><FaMapMarkerAlt /> Madurai, Tamil Nadu, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 GoRide Taxi</span>
          <div>
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms & Conditions</NavLink>
            <NavLink to="/cancellation-policy">Cancellation Policy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

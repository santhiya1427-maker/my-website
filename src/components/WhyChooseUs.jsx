import { FaShieldAlt, FaUserTie, FaCarSide, FaHeadset, FaClock, FaCheckCircle } from 'react-icons/fa';

const reasons = [
  { title: 'Transparent Pricing', icon: FaShieldAlt, text: 'Clear fares, no hidden fees, and no last-minute surprises.' },
  { title: 'Professional Drivers', icon: FaUserTie, text: 'Courteous chauffeurs trained to keep your ride smooth and safe.' },
  { title: 'Clean Vehicles', icon: FaCarSide, text: 'Sanitized cars with comfortable interiors and polished finishes.' },
  { title: '24/7 Support', icon: FaHeadset, text: 'Real people ready to assist around the clock for your travel needs.' },
  { title: 'On-Time Pickup', icon: FaClock, text: 'Reliable scheduling that helps you stay on track every trip.' },
  { title: 'Easy Booking', icon: FaCheckCircle, text: 'Fast, simple booking with instant ride confirmation and tracking.' },
];

function WhyChooseUs() {
  return (
    <section className="content-section alt-bg">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow accent">Why choose us</span>
          <h2>Service designed around your comfort</h2>
        </div>

        <div className="feature-grid">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="feature-card">
              <div className="feature-icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

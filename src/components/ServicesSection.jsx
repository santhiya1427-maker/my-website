import { FaCarSide, FaRoute, FaPlaneDeparture, FaKey, FaMapMarkedAlt, FaBuilding } from 'react-icons/fa';
import services from '../data/services.js';

const icons = [
  FaCarSide,
  FaRoute,
  FaPlaneDeparture,
  FaKey,
  FaMapMarkedAlt,
  FaBuilding,
];

function ServicesSection() {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow accent">Our services</span>
          <h2>Flexible travel solutions for every journey</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = icons[index] || FaCarSide;
            return (
              <article key={service.id} className="service-card">
                <div className="service-icon-wrap">
                  <Icon className="service-icon" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button type="button" className="btn btn-secondary">
                  Explore
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

function FloatingActions() {
  return (
    <div className="mobile-float">
      <a
        href="https://wa.me/918940218878"
        target="_blank"
        rel="noreferrer"
        className="float-btn secondary"
        aria-label="WhatsApp +91 8940218878"
      >
        <span className="float-icon">
          <FaWhatsapp />
        </span>
      </a>
      <a href="tel:+918940218878" className="float-btn" aria-label="Call +91 8940218878">
        <span className="float-icon">
          <FaPhoneAlt />
        </span>
      </a>
    </div>
  );
}

export default FloatingActions;

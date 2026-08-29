import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

function FloatingActions() {
  return (
    <div className="mobile-float">
      <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="float-btn secondary" aria-label="WhatsApp">
        <FaWhatsapp />
      </a>
      <a href="tel:+919876543210" className="float-btn" aria-label="Call">
        <FaPhoneAlt />
      </a>
    </div>
  );
}

export default FloatingActions;

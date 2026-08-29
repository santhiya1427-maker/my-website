import { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="content-section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow accent">Contact</span>
          <h2>Let’s plan your next ride</h2>
          <div className="contact-list">
            <div><FaPhoneAlt /> +91 8940218878</div>
            <div><FaWhatsapp /> +91 8940218878 </div>
            <div><FaEnvelope /> mksamyeee@gmail.com</div>
            <div><FaMapMarkerAlt /> Madurai, Tamil Nadu, India</div>
          </div>
          <div className="map-placeholder">
            <span>Map Placeholder</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
          </div>
          <div className="field-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="field-row">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="field-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary full-width-btn">Send Message</button>
          {submitted && <p className="success-message">Your message has been sent successfully.</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;

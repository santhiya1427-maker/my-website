import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed', minHeight: '280px' }}>
        <div className="container" style={{ paddingTop: '80px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginBottom: '12px' }}>Contact Us</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: '600px' }}>We're here to help with any questions about your rides</p>
        </div>
      </section>
      <section className="content-section page-section">
        <div className="container contact-grid contact-page-grid">
          <div className="contact-copy">
            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ marginBottom: '16px', color: 'var(--secondary)' }}>Quick Contact</h3>
              <div className="contact-list" style={{ rowGap: '14px' }}>
                <div><FaPhoneAlt /> <strong>Call us:</strong> +91 98765 43210</div>
                <div><FaWhatsapp /> <strong>WhatsApp:</strong> +91 98765 43210</div>
                <div><FaEnvelope /> <strong>Email:</strong> support@goridetaxi.com</div>
                <div><FaMapMarkerAlt /> <strong>Location:</strong> Madurai, Tamil Nadu, India</div>
              </div>
            </div>
            <div className="map-placeholder" style={{ marginTop: '20px', height: '240px' }}>
              <span>📍 Location Map Placeholder</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 style={{ marginTop: '0', color: 'var(--secondary)' }}>Send us a message</h3>
            <div className="field-row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your full name" required />
            </div>
            <div className="field-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
            </div>
            <div className="field-row">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
            </div>
            <div className="field-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Tell us how we can help..." required />
            </div>
            <button type="submit" className="btn btn-primary full-width-btn">Send Message</button>
            {submitted && <p className="success-message" style={{ textAlign: 'center' }}>✓ Your message has been sent successfully!</p>}
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactPage;

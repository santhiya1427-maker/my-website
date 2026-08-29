import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.includes('@')) nextErrors.email = 'Enter a valid email.';
    if (!form.phone.trim() || form.phone.length < 10) nextErrors.phone = 'Phone number is invalid.';
    if (!form.password || form.password.length < 6) nextErrors.password = 'Password must be at least 6 characters.';
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      localStorage.setItem('goride-user', JSON.stringify({ name: form.name, email: form.email, phone: form.phone }));
      navigate('/login');
    }
  };

  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed', minHeight: '280px' }}>
        <div className="container" style={{ paddingTop: '80px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginBottom: '12px' }}>Join GoRide Taxi</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: '600px' }}>Create your account and book rides instantly</p>
        </div>
      </section>
      <section className="content-section page-section" style={{ paddingTop: '40px' }}>
        <div className="container auth-card" style={{ maxWidth: '500px' }}>
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="field-row">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
              placeholder="Enter your full name" />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div className="field-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
              placeholder="your@email.com" />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
            <div className="field-row">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
               placeholder="Enter your phone number" />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>
            <div className="field-row">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" value={form.password} onChange={handleChange}
               placeholder="Create a password" />
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>
            <button type="submit" className="btn btn-primary full-width-btn">Sign Up</button>
            <p style={{ textAlign: 'center', color: 'var(--muted)', marginTop: '16px', fontSize: '0.9rem' }}>
              Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: '600' }}>Login here</Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Signup;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.email.includes('@')) nextErrors.email = 'Please enter a valid email.';
    if (!form.password || form.password.length < 6) nextErrors.password = 'Password must be at least 6 characters.';
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      navigate('/');
    }
  };

  return (
    <>
      <Navbar />
      <section className="hero-section" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15,95,74,0.9), rgba(31,42,55,0.85)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80)', backgroundAttachment: 'fixed', minHeight: '280px' }}>
        <div className="container" style={{ paddingTop: '80px' }}>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', marginBottom: '12px' }}>Welcome Back</h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: '600px' }}>Sign in to access your bookings and ride history</p>   </div>
      </section>
      <section className="content-section page-section login-section" style={{ paddingTop: '40px' }}>
        <div className="container auth-card" style={{ maxWidth: '500px' }}>
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="field-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
              placeholder="your@email.com" />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
            <div className="field-row">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter your password" />
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>
            <button type="submit" className="btn btn-primary full-width-btn">Login</button>           <p style={{ textAlign: 'center', color: 'var(--muted)', marginTop: '16px', fontSize: '0.9rem' }}>          Don't have an account? <a href="/signup" style={{ color: 'var(--primary)', fontWeight: '600' }}>Sign up here</a>            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;

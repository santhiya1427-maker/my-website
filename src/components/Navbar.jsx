import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaTaxi } from 'react-icons/fa';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/one-way', label: 'One Way' },
  { to: '/round-trip', label: 'Round Trip' },
  { to: '/airport-taxi', label: 'Airport Taxi' },
  { to: '/local-rental', label: 'Local Rental' },
  { to: '/tour-packages', label: 'Tour Packages' },
  { to: '/fleet-pricing', label: 'Fleet & Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/my-bookings', label: 'My Bookings' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <img src="/taxi.jpeg" alt="MAK Tours & Travels logo" className="brand-mark" />
          <span className="brand-text">MAK Tours & Travels</span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <NavLink to="/signup" className="nav-signup-link">
            Sign Up
          </NavLink>
          <NavLink to="/login" className="btn btn-primary nav-login">
            Login
          </NavLink>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? 'active' : ''}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { useBookingContext } from '../context/BookingContext.jsx';

const tabs = ['One Way', 'Round Trip', 'Airport Transfer'];

function Booking() {
  const navigate = useNavigate();
  const { booking, selectedVehicle, setBooking } = useBookingContext();
  const [activeTab, setActiveTab] = useState(booking?.tripType || 'One Way');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setActiveTab(booking?.tripType || 'One Way');
  }, [booking?.tripType]);

  if (!selectedVehicle) {
    return (
      <>
        <Navbar />
        <section className="content-section page-section">
          <div className="container compact-panel">
            <span className="eyebrow accent">Booking</span>
            <h2>No vehicle selected yet.</h2>
            <button type="button" className="btn btn-primary" onClick={() => navigate('/')}>
              Go to home
            </button>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const handleFieldChange = (field, value) => {
    setBooking((prev) => ({
      ...prev,
      [field]: value,
      tripType: activeTab,
    }));
  };

  const validateForm = () => {
    const nextErrors = {};
    if (!booking?.pickup?.trim()) nextErrors.pickup = 'Pickup location is required.';
    if (!booking?.drop?.trim()) nextErrors.drop = 'Drop location is required.';
    if (!booking?.date) nextErrors.date = 'Travel date is required.';
    if (!booking?.time) nextErrors.time = 'Pickup time is required.';
    if (!booking?.passengers || Number(booking.passengers) < 1) {
      nextErrors.passengers = 'Passengers are required.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setBooking((prev) => ({
      ...prev,
      tripType: activeTab,
    }));
    navigate('/booking-summary');
  };

  return (
    <>
      <Navbar />
      <section className="content-section page-section">
        <div className="container compact-panel">
          <span className="eyebrow accent">Booking</span>
          <h2>Book your {selectedVehicle.name}</h2>

          <div className="booking-widget">
            <div className="booking-tabs" role="tablist" aria-label="Trip type tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(tab);
                    setBooking((prev) => ({ ...prev, tripType: tab }));
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <form className="booking-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="input-field">
                  <label htmlFor="pickup">Pickup Location</label>
                  <input
                    id="pickup"
                    type="text"
                    value={booking?.pickup || ''}
                    onChange={(e) => handleFieldChange('pickup', e.target.value)}
                    placeholder="Enter pickup location"
                  />
                  {errors.pickup && <span className="field-error">{errors.pickup}</span>}
                </div>

                <div className="input-field">
                  <label htmlFor="drop">Drop Location</label>
                  <input
                    id="drop"
                    type="text"
                    value={booking?.drop || ''}
                    onChange={(e) => handleFieldChange('drop', e.target.value)}
                    placeholder="Enter destination"
                  />
                  {errors.drop && <span className="field-error">{errors.drop}</span>}
                </div>

                <div className="input-field">
                  <label htmlFor="date">Travel Date</label>
                  <input
                    id="date"
                    type="date"
                    value={booking?.date || ''}
                    onChange={(e) => handleFieldChange('date', e.target.value)}
                  />
                  {errors.date && <span className="field-error">{errors.date}</span>}
                </div>

                <div className="input-field">
                  <label htmlFor="time">Pickup Time</label>
                  <input
                    id="time"
                    type="time"
                    value={booking?.time || ''}
                    onChange={(e) => handleFieldChange('time', e.target.value)}
                  />
                  {errors.time && <span className="field-error">{errors.time}</span>}
                </div>

                <div className="input-field">
                  <label htmlFor="passengers">Number of Passengers</label>
                  <select
                    id="passengers"
                    value={booking?.passengers || ''}
                    onChange={(e) => handleFieldChange('passengers', e.target.value)}
                  >
                    <option value="">Select passengers</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                      <option key={count} value={count}>
                        {count} {count === 1 ? 'Passenger' : 'Passengers'}
                      </option>
                    ))}
                  </select>
                  {errors.passengers && <span className="field-error">{errors.passengers}</span>}
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
                  Back
                </button>
                <button type="submit" className="btn btn-primary">
                  Continue to Summary
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Booking;

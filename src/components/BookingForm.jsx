import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaPlus,
} from 'react-icons/fa';
import { useBookingContext } from '../context/BookingContext.jsx';

const tabs = ['One Way', 'Round Trip', 'Airport Transfer'];

function BookingForm() {
  const navigate = useNavigate();
  const { booking, setBooking } = useBookingContext();
  const [activeTab, setActiveTab] = useState(booking?.tripType || 'One Way');
  const [errors, setErrors] = useState({});

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
    if (!booking?.passengers || Number(booking.passengers) < 1) nextErrors.passengers = 'Passengers are required.';

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const updatedBooking = {
      ...booking,
      tripType: activeTab,
    };

    setBooking(updatedBooking);
    navigate('/search-results');
  };

  return (
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
            <div className="input-wrap">
              <FaMapMarkerAlt className="field-icon" />
              <input
                id="pickup"
                type="text"
                value={booking?.pickup || ''}
                onChange={(e) => handleFieldChange('pickup', e.target.value)}
                placeholder="Enter pickup location"
              />
            </div>
            {errors.pickup && <span className="field-error">{errors.pickup}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="drop">Drop Location</label>
            <div className="input-wrap">
              <FaMapMarkerAlt className="field-icon" />
              <input
                id="drop"
                type="text"
                value={booking?.drop || ''}
                onChange={(e) => handleFieldChange('drop', e.target.value)}
                placeholder="Enter destination"
              />
            </div>
            {errors.drop && <span className="field-error">{errors.drop}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="stops">Add Stops</label>
            <div className="input-wrap">
              <FaPlus className="field-icon" />
              <input
                id="stops"
                type="text"
                value={booking?.stops || ''}
                onChange={(e) => handleFieldChange('stops', e.target.value)}
                placeholder="Optional stop"
              />
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="date">Travel Date</label>
            <div className="input-wrap">
              <FaCalendarAlt className="field-icon" />
              <input
                id="date"
                type="date"
                value={booking?.date || ''}
                onChange={(e) => handleFieldChange('date', e.target.value)}
              />
            </div>
            {errors.date && <span className="field-error">{errors.date}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="time">Pickup Time</label>
            <div className="input-wrap">
              <FaClock className="field-icon" />
              <input
                id="time"
                type="time"
                value={booking?.time || ''}
                onChange={(e) => handleFieldChange('time', e.target.value)}
              />
            </div>
            {errors.time && <span className="field-error">{errors.time}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="passengers">Number of Passengers</label>
            <div className="input-wrap">
              <FaUser className="field-icon" />
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
            </div>
            {errors.passengers && <span className="field-error">{errors.passengers}</span>}
          </div>
        </div>

        <button type="submit" className="btn btn-primary full-width-btn">
          Search Cabs
        </button>
      </form>
    </div>
  );
}

export default BookingForm;

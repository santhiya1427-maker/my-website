import { FaMapMarkedAlt, FaCarSide, FaClipboardCheck } from 'react-icons/fa';

const steps = [
  {
    number: '01',
    title: 'Enter your trip details',
    text: 'Share pickup, destination, date, and passenger details for a personalized trip quote.',
    icon: FaMapMarkedAlt,
  },
  {
    number: '02',
    title: 'Select your vehicle',
    text: 'Choose from our premium fleet and compare fares before confirming your ride.',
    icon: FaCarSide,
  },
  {
    number: '03',
    title: 'Confirm your booking',
    text: 'Finalize your trip and receive instant confirmation with your booking summary.',
    icon: FaClipboardCheck,
  },
];

function HowItWorks() {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow accent">How it works</span>
          <h2>Simple steps to book your ride</h2>
        </div>

        <div className="steps-grid">
          {steps.map(({ number, title, text, icon: Icon }) => (
            <div key={number} className="step-card">
              <div className="step-number">{number}</div>
              <div className="step-icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

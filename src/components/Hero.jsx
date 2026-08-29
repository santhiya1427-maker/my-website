import Navbar from './Navbar.jsx';
import BookingForm from './BookingForm.jsx';
import { useBookingContext } from '../context/BookingContext.jsx';

const heroBackground = '/taxi.jpeg';

function Hero() {
  const { booking, setBooking } = useBookingContext();

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(9,24,20,0.42), rgba(9,24,20,0.18)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-overlay" />
      <Navbar />
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="eyebrow">Trusted rides, every day</span>
          <h1>Your Journey, Our Priority</h1>
          <p>Reliable One Way, Round Trip & Airport Taxi Services</p>
        </div>

        <BookingForm booking={booking} setBooking={setBooking} />
      </div>
    </section>
  );
}

export default Hero;

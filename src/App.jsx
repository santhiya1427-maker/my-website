import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { BookingProvider } from './context/BookingContext.jsx';
import FloatingActions from './components/FloatingActions.jsx';

import Home from './pages/Home.jsx';
import OneWay from './pages/OneWay.jsx';
import RoundTrip from './pages/RoundTrip.jsx';
import AirportTaxi from './pages/AirportTaxi.jsx';
import LocalRental from './pages/LocalRental.jsx';
import TourPackagesPage from './pages/TourPackages.jsx';
import TourDetails from './pages/TourDetails.jsx';
import FleetPricing from './pages/FleetPricing.jsx';
import About from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import SearchResults from './pages/SearchResults.jsx';
import BookingSummary from './pages/BookingSummary.jsx';
import Booking from './pages/Booking.jsx';
import BookingConfirmation from './pages/BookingConfirmation.jsx';
import Confirmation from './pages/Confirmation.jsx';
import MyBookings from './pages/MyBookings.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Terms from './pages/Terms.jsx';
import CancellationPolicy from './pages/CancellationPolicy.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/one-way" element={<OneWay />} />
          <Route path="/round-trip" element={<RoundTrip />} />
          <Route path="/airport-taxi" element={<AirportTaxi />} />
          <Route path="/local-rental" element={<LocalRental />} />
          <Route path="/tour-packages" element={<TourPackagesPage />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/fleet-pricing" element={<FleetPricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingActions />
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;

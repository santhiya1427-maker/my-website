import Hero from '../components/Hero.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import FleetSection from '../components/FleetSection.jsx';
import TourPackagesSection from '../components/TourPackagesSection.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import FAQ from '../components/FAQ.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';
import vehicles from '../data/vehicles.js';
import { useBookingContext } from '../context/BookingContext.jsx';

function Home() {
  const { selectedVehicle, setSelectedVehicle, setConfirmation } = useBookingContext();

  const handleVehicleSelect = (vehicle) => {
    const chosenVehicle = vehicle || vehicles[0];
    setSelectedVehicle(chosenVehicle);
    setConfirmation((prev) => ({ ...prev, vehicle: chosenVehicle.name }));
  };

  return (
    <>
      <Hero />
      <ServicesSection />
      <FleetSection selectedVehicle={selectedVehicle} onSelectVehicle={handleVehicleSelect} />
      <TourPackagesSection />
      <WhyChooseUs />
      <HowItWorks />
      <FAQ />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;

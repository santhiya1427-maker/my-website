import TourCard from './TourCard.jsx';
import tours from '../data/tourPackages.js';

function TourPackagesSection() {
  return (
    <section className="content-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow accent">Tour packages</span>
          <h2>Popular getaways from our city</h2>
        </div>

        <div className="tour-grid">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TourPackagesSection;

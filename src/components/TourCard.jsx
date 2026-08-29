import { Link } from 'react-router-dom';

function TourCard({ tour }) {
  return (
    <article className="tour-card">
      <img src={tour.image} alt={tour.destination} />
      <div className="tour-card-body">
        <span className="tour-days">{tour.days}</span>
        <h3>{tour.destination}</h3>
        <p>{tour.description}</p>
        <div className="tour-meta">
          <span>Starting at</span>
          <strong>₹{tour.price}</strong>
        </div>
        <Link to={`/tour/${tour.id}`} className="btn btn-secondary" style={{ display: 'block', textAlign: 'center' }}>
          View Details
        </Link>
      </div>
    </article>
  );
}

export default TourCard;

function VehicleCard({ vehicle, isSelected = false, onSelect }) {
  const distance = 210;
  const estimatedFare = Math.round(distance * vehicle.pricePerKm + vehicle.driverAllowance);

  return (
    <article className={`vehicle-card ${isSelected ? 'selected' : ''}`}>
      <img src={vehicle.image} alt={vehicle.name} />
      <div className="vehicle-card-body">
        <div className="vehicle-card-header">
          <h3>{vehicle.name}</h3>
          <span className="vehicle-tag">{vehicle.seats} seats</span>
        </div>

        <ul className="vehicle-meta">
          <li>AC: {vehicle.ac ? 'Yes' : 'No'}</li>
          <li>₹{vehicle.pricePerKm}/km</li>
          <li>Min {vehicle.minimumKm} km</li>
          <li>Driver allowance: ₹{vehicle.driverAllowance}</li>
        </ul>

        <div className="vehicle-price-row">
          <span>Estimated fare</span>
          <strong>₹{estimatedFare}</strong>
        </div>

        <button type="button" className="btn btn-primary" onClick={() => onSelect(vehicle)}>
          {isSelected ? 'Selected' : 'Book Now'}
        </button>
      </div>
    </article>
  );
}

export default VehicleCard;

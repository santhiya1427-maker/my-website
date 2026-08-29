import { useNavigate } from 'react-router-dom';
import vehicles from '../data/vehicles.js';
import VehicleCard from './VehicleCard.jsx';

function FleetSection({ selectedVehicle, onSelectVehicle }) {
  const navigate = useNavigate();

  const handleVehicleSelect = (vehicle) => {
    onSelectVehicle(vehicle);
    navigate('/booking');
  };

  return (
    <section className="content-section alt-bg">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow accent">Fleet & pricing</span>
          <h2>Choose the right ride for your trip</h2>
        </div>

        <div className="vehicles-grid">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              isSelected={selectedVehicle?.id === vehicle.id}
              onSelect={handleVehicleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FleetSection;

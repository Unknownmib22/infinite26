import { Link } from "react-router-dom";

function DynastyCard({ symbol, name, japanese, description, accent }) {
  return (
    <Link
      to="/events"
      className="dynasty-card"
      style={{ "--accent": accent }}
    >
      <div className="dynasty-symbol">{symbol}</div>

      <div className="dynasty-content">
        <span>{japanese}</span>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div className="dynasty-arrow">↗</div>
    </Link>
  );
}

export default DynastyCard;
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <Link to={`/events/${event.id}`} className="event-card">
      <div className="event-card-top">
        <span className="event-category">
          {event.category}
        </span>

        <span className="event-japanese">
          {event.japanese}
        </span>
      </div>

      <div className="event-card-middle">
        <h3>{event.name}</h3>

        <p>{event.description}</p>
      </div>

      <div className="event-card-bottom">
        <span>
          ₹{event.fee}
          {event.pricing === "per_head" && " / head"}
          {event.pricing === "per_team" && " / team"}
          {event.pricing === "per_entry" && " / entry"}
        </span>

        <ArrowUpRight size={19} />
      </div>
    </Link>
  );
}

export default EventCard;
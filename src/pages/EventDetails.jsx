import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import events from "../data/events";

function EventDetails() {
  const { eventId } = useParams();

  const event = events.find(
    (item) => item.id === eventId
  );

  if (!event) {
    return (
      <div className="site">
        <Navbar />

        <main className="not-found">
          <h1>Event Not Found</h1>

          <Link to="/events" className="btn btn-primary">
            Back to Events
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  const pricingText =
    event.pricing === "per_head"
      ? "₹" + event.fee + " / head"
      : event.pricing === "per_team"
      ? "₹" + event.fee + " / team"
      : "₹" + event.fee + " / entry";

  return (
    <div className="site">
      <Navbar />

      <main className="event-detail-page">
        <section className="event-detail-hero">
          <Link to="/events" className="back-link">
            <ArrowLeft size={16} />
            Back to Events
          </Link>

          <div className="event-detail-symbol">
            {event.japanese}
          </div>

          <p className="section-kicker">
            DYNASTY OF {event.dynasty.toUpperCase()}
          </p>

          <h1>{event.name}</h1>

          <p className="event-detail-description">
            {event.description}
          </p>

          <div className="event-price">
            {pricingText}
          </div>
        </section>

        <section className="event-detail-body">
          <div className="event-info-box">
            <span>PARTICIPATION</span>

            <strong>
              {event.type === "individual"
                ? "Individual"
                : event.type === "team"
                ? `${event.minMembers}–${event.maxMembers} Members`
                : event.type === "entry"
                ? "Per Entry"
                : "As specified in event rules"}
            </strong>
          </div>

          <div className="rules-section">
            <p className="section-kicker">
              EVENT GUIDELINES
            </p>

            <h2>Rules & Regulations</h2>

            <div className="rules-list">
              {event.rules.map((rule, index) => (
                <div className="rule" key={index}>
                  <span>✦</span>
                  <p>{rule}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="event-register-box">
            <div>
              <span className="section-kicker">
                READY?
              </span>

              <h2>Begin Your Chronicle.</h2>
            </div>

            <Link
              to={`/register?event=${event.id}`}
              className="btn btn-primary"
            >
              Register for {event.name}
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default EventDetails;
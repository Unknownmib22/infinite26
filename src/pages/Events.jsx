import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";
import events from "../data/events";

const dynasties = ["All", "Kaze", "Oto", "Kokoro", "Yume"];

function Events() {
  const [selectedDynasty, setSelectedDynasty] = useState("All");

  const filteredEvents = useMemo(() => {
    if (selectedDynasty === "All") {
      return events;
    }

    return events.filter(
      (event) => event.dynasty === selectedDynasty
    );
  }, [selectedDynasty]);

  return (
    <div className="site">
      <Navbar />

      <main className="events-page">
        <section className="page-hero">
          <p className="section-kicker">THE CHRONICLES</p>

          <h1>Events</h1>

          <p>
            Four dynasties.
            <br />
            Twenty-four ways to leave your mark.
          </p>
        </section>

        <section className="events-content">
          <div className="event-filters">
            {dynasties.map((dynasty) => (
              <button
                key={dynasty}
                className={
                  selectedDynasty === dynasty
                    ? "filter active"
                    : "filter"
                }
                onClick={() => setSelectedDynasty(dynasty)}
              >
                {dynasty}
              </button>
            ))}
          </div>

          <div className="events-count">
            Showing {filteredEvents.length} events
          </div>

          <div className="events-grid">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}
          </div>
        </section>

        <section className="events-register-cta">
          <p className="section-kicker">
            FOUND YOUR CHRONICLE?
          </p>

          <h2>Take the First Step.</h2>

          <Link
            to="/register"
            className="btn btn-primary large"
          >
            Register Now
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Events;
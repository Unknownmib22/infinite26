import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import brochurePdf from "../assets/brochure.pdf";

function Brochure() {
  return (
    <>
      <Navbar />

      <main className="brochure-page">
        {/* Header */}
        <section className="brochure-hero">
          <div className="brochure-japanese">無限</div>

          <p className="brochure-kicker">SPARTANZ'23 PRESENTS</p>

          <h1>INFINITE'26</h1>

          <p className="brochure-subtitle">
            THE OFFICIAL EVENT BROCHURE
          </p>

          <div className="brochure-divider" />

          <p className="brochure-description">
            Explore the complete event details, categories, rules,
            registration fees and participation guidelines.
          </p>
        </section>

        {/* PDF Preview */}
        <section className="brochure-preview-section">
          <div className="brochure-section-heading">
            <span>01</span>
            <h2>EVENT BROCHURE</h2>
          </div>

          <div className="brochure-frame">
            <iframe
              src={`${brochurePdf}#toolbar=0&navpanes=0`}
              title="INFINITE'26 Event Brochure"
            />
          </div>

          <div className="brochure-actions">
            <a
              href={brochurePdf}
              target="_blank"
              rel="noreferrer"
              className="brochure-button primary"
            >
              OPEN FULL BROCHURE
              <ExternalLink size={17} />
            </a>

            <a
              href="https://online.fliphtml5.com/Infinitechmc/oqfi/"
              target="_blank"
              rel="noreferrer"
              className="brochure-button secondary"
            >
              INTERACTIVE BROCHURE
              <ExternalLink size={17} />
            </a>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="brochure-cta">
          <div>
            <p className="brochure-kicker">READY TO PARTICIPATE?</p>
            <h2>Choose Your Event.</h2>
            <p>
              Explore the events and register for your chosen category.
            </p>
          </div>

          <Link to="/events" className="brochure-register-button">
            VIEW EVENTS
            <ArrowRight size={18} />
          </Link>
        </section>

        {/* Back */}
        <div className="brochure-back">
          <Link to="/">
            <ArrowLeft size={17} />
            BACK TO HOME
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Brochure;
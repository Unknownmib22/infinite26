import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  MessageCircle,
  ExternalLink,
  Phone,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="contact-page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="contact-hero">

          <div className="contact-japanese">
            連絡
          </div>

          <p className="contact-kicker">
            SPARTANZ'23 PRESENTS
          </p>

          <h1>CONTACT</h1>

          <p className="contact-subtitle">
            LET'S CONNECT
          </p>

          <div className="contact-divider" />

          <p className="contact-description">
            Have a question about INFINITE'26,
            registrations or events? Reach out to
            our organizing team through the official
            channels.
          </p>

        </section>


        {/* =========================================
            VENUE
        ========================================= */}

        <section className="contact-section">

          <div className="contact-section-heading">
            <span>01</span>
            <h2>VENUE</h2>
          </div>


          <div className="contact-card">

            <MapPin
              size={28}
              strokeWidth={1.5}
            />

            <div>

              <p className="contact-card-label">
                EVENT VENUE
              </p>

              <h3>
                CHMC Auditorium
              </h3>

              <p>
                Chengalpattu Medical College (CHMC)
              </p>

            </div>

          </div>


          <p className="contact-note">
            Event-specific venues will be announced
            through our official WhatsApp community.
          </p>

        </section>


        {/* =========================================
            CULTURAL SECRETARIES
        ========================================= */}

        <section className="contact-section">

          <div className="contact-section-heading">
            <span>02</span>
            <h2>CULTURAL SECRETARIES</h2>
          </div>


          <div className="secretaries-grid">


            {/* LOGASH */}

            <div className="secretary-card">

              <div className="secretary-photo-wrap">

                <img
                  src="/logash.jpeg"
                  alt="Logash"
                  className="secretary-photo"
                />

              </div>

              <div className="secretary-info">

                <p className="contact-card-label">
                  CULTURAL SECRETARY
                </p>

                <h3>
                  LOGASH
                </h3>

                <a
                  href="tel:+916379970557"
                  className="phone-link"
                >
                  <Phone size={16} />
                  +91 63799 70557
                </a>

              </div>

            </div>


            {/* SUBHASHREE */}

            <div className="secretary-card">

              <div className="secretary-photo-wrap">

                <img
                  src="/subhashree.jpeg"
                  alt="Subhashree"
                  className="secretary-photo"
                />

              </div>

              <div className="secretary-info">

                <p className="contact-card-label">
                  CULTURAL SECRETARY
                </p>

                <h3>
                  SUBHASHREE
                </h3>

                <a
                  href="tel:+916384785124"
                  className="phone-link"
                >
                  <Phone size={16} />
                  +91 63847 85124
                </a>

              </div>

            </div>


          </div>

        </section>


        {/* =========================================
            REGISTRATION QUERIES
        ========================================= */}

        <section className="contact-section">

          <div className="contact-section-heading">
            <span>03</span>
            <h2>REGISTRATION QUERIES</h2>
          </div>


          <div className="query-grid">

            <a
              href="tel:+916384785124"
              className="query-card"
            >

              <span className="query-number">
                01
              </span>

              <div>

                <p>
                  REGISTRATION
                </p>

                <h3>
                  CHANDRU
                </h3>

                <span>
                  +91 63847 85124
                </span>

              </div>

              <Phone size={18} />

            </a>


            <a
              href="tel:+919566403699"
              className="query-card"
            >

              <span className="query-number">
                02
              </span>

              <div>

                <p>
                  REGISTRATION
                </p>

                <h3>
                  HARINI
                </h3>

                <span>
                  +91 95664 03699
                </span>

              </div>

              <Phone size={18} />

            </a>

          </div>

        </section>


        {/* =========================================
            OTHER QUERIES
        ========================================= */}

        <section className="contact-section">

          <div className="contact-section-heading">
            <span>04</span>
            <h2>OTHER QUERIES</h2>
          </div>


          <div className="query-grid">

            <a
              href="tel:+919498378774"
              className="query-card"
            >

              <span className="query-number">
                01
              </span>

              <div>

                <p>
                  OTHER QUERIES
                </p>

                <h3>
                  HARIHARAN
                </h3>

                <span>
                  +91 94983 78774
                </span>

              </div>

              <Phone size={18} />

            </a>


            <a
              href="tel:+919043353971"
              className="query-card"
            >

              <span className="query-number">
                02
              </span>

              <div>

                <p>
                  OTHER QUERIES
                </p>

                <h3>
                  SIRIN TAJ
                </h3>

                <span>
                  +91 90433 53971
                </span>

              </div>

              <Phone size={18} />

            </a>

          </div>

        </section>


        {/* =========================================
            SOCIAL MEDIA
        ========================================= */}

        <section className="contact-section">

          <div className="contact-section-heading">
            <span>05</span>
            <h2>FOLLOW INFINITE'26</h2>
          </div>


          <div className="contact-links">


            {/* WHATSAPP */}

            <a
              href="https://chat.whatsapp.com/FHCFQ0ghv7pAWdUvjy3S3M"
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >

              <div className="contact-link-icon">
                <MessageCircle size={24} />
              </div>

              <div>

                <p>
                  WHATSAPP COMMUNITY
                </p>

                <h3>
                  Join INFINITE'26
                </h3>

              </div>

              <ExternalLink size={18} />

            </a>


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/infinite_cmch?stkn=MmxvZ2c5MWhoY3Z0"
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >

              <div className="contact-link-icon">
                <span className="social-letter">IG</span>
              </div>

              <div>

                <p>
                  INSTAGRAM
                </p>

                <h3>
                  @infinite_cmch
                </h3>

              </div>

              <ExternalLink size={18} />

            </a>


            {/* YOUTUBE */}

            <a
              href="https://www.youtube.com/@INFINITE26Chmc"
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >

              <div className="contact-link-icon">
                <span className="social-letter">YT</span>
              </div>

              <div>

                <p>
                  YOUTUBE
                </p>

                <h3>
                  @INFINITE26Chmc
                </h3>

              </div>

              <ExternalLink size={18} />

            </a>


            {/* FACEBOOK */}

            <a
              href="https://www.facebook.com/share/189ZobwKHb/"
              target="_blank"
              rel="noreferrer"
              className="contact-link-card"
            >

              <div className="contact-link-icon">
                <span className="social-letter">FB</span>
              </div>

              <div>

                <p>
                  FACEBOOK
                </p>

                <h3>
                  INFINITE'26
                </h3>

              </div>

              <ExternalLink size={18} />

            </a>


          </div>

        </section>


        {/* =========================================
            SPARTANZ BRANDING
        ========================================= */}

        <section className="contact-organizer-section">

          <div className="contact-section-heading">
            <span>06</span>
            <h2>SPARTANZ'23</h2>
          </div>


          <div className="contact-organizer-final">

            <img
              src="/spartanz-logo.png"
              alt="Spartanz'23"
              className="spartanz-contact-logo"
            />

            <div>

              <p className="contact-card-label">
                ORGANIZED BY
              </p>

              <h3>
                SPARTANZ'23
              </h3>

              <p>
                Student Cultural Club
              </p>

            </div>

          </div>

        </section>


        {/* =========================================
            CTA
        ========================================= */}

        <section className="contact-cta">

          <div>

            <p className="contact-kicker">
              READY TO PARTICIPATE?
            </p>

            <h2>
              Find Your Event.
            </h2>

            <p>
              Explore all INFINITE'26 events and
              register now.
            </p>

          </div>


          <Link
            to="/events"
            className="contact-cta-button"
          >

            VIEW EVENTS

            <ArrowRight size={18} />

          </Link>

        </section>


        {/* BACK */}

        <div className="contact-back">

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

export default Contact;
import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroAnimation from "../components/IntroAnimation";
import DynastyCard from "../components/DynastyCard";

function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && (
        <IntroAnimation onComplete={() => setIntroComplete(true)} />
      )}

      <div className="site">
        <Navbar />

        <main>
          {/* HERO */}
          <section className="hero">
            <div className="hero-brush brush-one" />
            <div className="hero-brush brush-two" />

            <div className="hero-content">
              <p className="eyebrow">SPARTANZ'23 PRESENTS</p>

              <div className="hero-kanji">無限</div>

              <h1>
                INFINITE<span>'26</span>
              </h1>

              <div className="hero-line" />

              <p className="tagline">
                WHERE ORDINARY ENDS,
                <br />
                <strong>INFINITE BEGINS.</strong>
              </p>

              <p className="hero-description">
                A chronicle of talent, imagination and possibilities.
                <br />
                Four dynasties. Countless stories. One stage.
              </p>

              <div className="hero-buttons">
                <Link to="/events" className="btn btn-primary">
                  Explore Events
                  <ArrowRight size={18} />
                </Link>

                <Link to="/register" className="btn btn-secondary">
                  Register Now
                </Link>
              </div>
            </div>

            <div className="hero-scroll">
              <ArrowDown size={18} />
              <span>SCROLL TO BEGIN</span>
            </div>
          </section>

          {/* STORY */}
          <section className="story-section">
            <div className="section-number">01</div>

            <div className="section-heading">
              <p className="section-kicker">THE CHRONICLE BEGINS</p>
              <h2>Write Your Story.</h2>
              <p>
                INFINITE'26 is more than a cultural celebration.
                It is a gathering of voices, movement, imagination and
                expression.
              </p>
            </div>

            <div className="story-quote">
              <span>∞</span>
              <p>
                Every performer inspires another.
                <br />
                Every idea becomes another.
                <br />
                Every moment becomes a memory.
              </p>
            </div>
          </section>

          {/* DYNASTIES */}
          <section className="dynasties-section">
            <div className="section-heading centered">
              <p className="section-kicker">THE FOUR DYNASTIES</p>

              <h2>Choose Your Chronicle</h2>

              <p>
                Four realms. Countless talents.
                <br />
                One infinite legacy.
              </p>
            </div>

            <div className="dynasty-grid">
              <DynastyCard
                symbol="風"
                japanese="KAZE"
                name="Kaze"
                description="Where movement speaks and style defines."
                accent="#536348"
              />

              <DynastyCard
                symbol="音"
                japanese="OTO"
                name="Oto"
                description="Where sound becomes emotion and every note tells a story."
                accent="#26364b"
              />

              <DynastyCard
                symbol="心"
                japanese="KOKORO"
                name="Kokoro"
                description="Where words touch souls and ideas find a voice."
                accent="#722d2d"
              />

              <DynastyCard
                symbol="夢"
                japanese="YUME"
                name="Yume"
                description="Where imagination creates new realities."
                accent="#562647"
              />
            </div>
          </section>

          {/* VENUE */}
          <section className="venue-section">
            <div className="torii-decoration">鳥居</div>

            <p className="section-kicker">THE GATHERING</p>

            <h2>Chengalpattu Medical College</h2>

            <p className="venue-main">CHMC AUDITORIUM</p>

            <p className="venue-note">
              Event-specific venues will be announced through
              the official WhatsApp community.
            </p>

            <a
              href="https://chat.whatsapp.com/FHCFQ0ghv7pAWdUvjy3S3M"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Join the Community <ArrowRight size={17} />
            </a>
          </section>

          {/* CTA */}
          <section className="final-cta">
            <p className="section-kicker">YOUR CHRONICLE AWAITS</p>

            <h2>
              Leave Your Mark.
              <br />
              <em>Be Infinite.</em>
            </h2>

            <Link to="/register" className="btn btn-primary large">
              Begin Your Registration
              <ArrowRight size={20} />
            </Link>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Home;
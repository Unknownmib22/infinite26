import { MessageCircle} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logos">

        <img
          src="/infinite-logo.png"
          alt="INFINITE'26"
          className="footer-infinite-logo"
        />

        <div className="footer-presented">
          <span>PRESENTED BY</span>
          <img
            src="/spartanz-logo.png"
            alt="Spartanz'23"
            className="footer-spartanz-logo"
          />
        </div>

      </div>


      <p className="footer-tagline">
        WHERE ORDINARY ENDS,
        <br />
        INFINITE BEGINS.
      </p>


      <div className="footer-links">

        {/* Instagram */}

        <a
          href="https://www.instagram.com/infinite_cmch/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footer-social-letter">IG</span>
          Instagram
        </a>


        {/* YouTube */}

        <a
          href="https://www.youtube.com/@INFINITE26Chmc"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footer-social-letter">YT</span>
          YouTube
        </a>


        {/* Facebook */}

        <a
          href="https://www.facebook.com/share/189ZobwKHb/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footer-social-letter">FB</span>
          Facebook
        </a>


        {/* WhatsApp */}

        <a
          href="https://chat.whatsapp.com/FHCFQ0ghv7pAWdUvjy3S3M"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

      </div>


      <div className="footer-divider" />


      <small>
        Spartanz'23 presents INFINITE'26
        <br />
        Chengalpattu Medical College
      </small>

    </footer>
  );
}

export default Footer;
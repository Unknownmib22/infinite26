import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <img
          src="/infinite-logo.png"
          alt="INFINITE'26"
          className="navbar-logo"
        />
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/brochure">Brochure</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/register" className="nav-register">
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
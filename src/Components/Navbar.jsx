import { Link } from "react-router-dom";
import "../css/navBar.css"; // Upewnij się, że ścieżka do pliku jest poprawna

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <strong>Bank JL</strong>
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/history" className="nav-link">
          Historia
        </Link>
        <Link to="/profile" className="nav-link">
          Profil
        </Link>
        <div className="auth-status">
          <span className="status-dot"></span>
          <Link to="/login" className="nav-link">
            Zaloguj się
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

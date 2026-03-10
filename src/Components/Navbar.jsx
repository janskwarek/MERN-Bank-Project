import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar"
      style={{
        padding: "10px",
        background: "#f0f0f0",
        display: "flex",
        gap: "20px",
      }}
    >
      <div className="navbar-brand">
        <Link to="/">
          <strong>Bank JL</strong>
        </Link>
      </div>

      <div className="navbar-links" style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/profile">Profil</Link>
        <p>Nie zalogowano</p>
      </div>
    </nav>
  );
}

export default NavBar;

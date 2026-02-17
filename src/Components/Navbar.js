import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <h2 className="logo">Cake Shop</h2>

      {/* Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

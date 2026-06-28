import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="TeesuBakes Logo" />
          <h2>TeesuBakes</h2>
        </Link>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/custom-orders">Custom Orders</Link>
        </li>

        <li>
          <Link to="/order-guide">Order Guide</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
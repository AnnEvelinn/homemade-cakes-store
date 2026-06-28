import "../css/Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="TeesuBakes Logo" />
        <h2>TeesuBakes</h2>
      </div>

      <ul className="nav-links">

        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">Products</a>
        </li>

        <li>
          <a href="#">Custom Orders</a>
        </li>

        <li>
          <a href="#">Order Guide</a>
        </li>

        <li>
          <a href="#">About Us</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
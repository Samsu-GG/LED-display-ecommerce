import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        EagerLED
      </NavLink>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/product">Products</NavLink>
      </nav>
    </header>
  );
}

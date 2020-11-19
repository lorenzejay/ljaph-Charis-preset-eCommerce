import { Link } from "gatsby"
import React from "react"
import "./styles.scss"

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link className="logo" to="/">
          Charis Cheung Preset
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/products">Presets</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart 🛍</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

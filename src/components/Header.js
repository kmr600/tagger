import React from "react"
import { Link } from "gatsby"
import Sidebar from "./Sidebar"
import Logo from "../images/logo.png"

const Header = () => {
  const isPartiallyActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? { className: "active" } : null
  }

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Tagger" />
        </Link>
      </div>

      <nav className="desktop">
        <Link to="/" activeClassName="active">
          Generator
        </Link>
        <Link to="/about" activeClassName="active" getProps={isPartiallyActive}>
          About
        </Link>
        <Link
          to="/contact"
          activeClassName="active"
          getProps={isPartiallyActive}
        >
          Contact
        </Link>
      </nav>

      <Sidebar />
    </header>
  )
}

export default Header

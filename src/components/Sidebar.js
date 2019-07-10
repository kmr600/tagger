import React, { useState } from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const isPartiallyActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? { className: "active" } : null
  }

  return (
    <div className="mobile" id="mobile-nav">
      <Menu right isOpen={isOpen} bodyClassName={"no-scroll"}>
        <Link to="/" activeClassName="active" onClick={() => setIsOpen(false)}>
          Generator
        </Link>
        <Link
          to="/about"
          activeClassName="active"
          getProps={isPartiallyActive}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          activeClassName="active"
          getProps={isPartiallyActive}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </Menu>
    </div>
  )
}

export default Sidebar

import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.png'

const Footer = () => (
  <footer>
    <div className="logo">
      <Link to="/">
        <img src={Logo} alt="Tagger" />
      </Link>
    </div>
  </footer>
)

export default Footer
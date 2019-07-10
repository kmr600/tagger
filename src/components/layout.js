import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/main.scss"

const Layout = ({ children }) => {
  return (
    <div id="page">
      <div className="container">
        <Header />

        <main>{children}</main>
      </div>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

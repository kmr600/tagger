import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const GradientButton = ({ to, onClick, type, className, children }) => {
  if (to) {
    return (
      <Link to={to} className={`gradient-button ${className ? className : ""}`}>
        {children}
      </Link>
    )
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={`gradient-button ${className ? className : ""}`}
    >
      {children}
    </button>
  )
}

GradientButton.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default GradientButton

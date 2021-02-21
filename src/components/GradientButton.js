import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.button`
  text-decoration: none;
  padding: 25px 60px;
  font-size: 1rem;
  font-weight: 500;
  background: ${props => props.theme.gradient};
  color: #fff;
  border: none;
  border-radius: 50px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  outline: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0.7rem 2rem rgba(0, 0, 0, 0.175) !important;
    transform: translate(0, -1px);
  }
`

const GradientButton = ({ to, onClick, type, className, children }) => {
  if (to) {
    return (
      <Link to={to} className={`gradient-button ${className ? className : ""}`}>
        <Container>{children}</Container>
      </Link>
    )
  }

  return (
    <Container
      onClick={onClick}
      type={type}
      className={`gradient-button ${className ? className : ""}`}
    >
      {children}
    </Container>
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

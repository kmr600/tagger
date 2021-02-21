import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Sidebar from "./Sidebar"
import Logo from "../images/logo.png"

const Header = styled.header`
  width: 100%;
  margin: 25px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div`
  width: 150px;

  img {
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 125px;
  }
`

const Nav = styled.nav`
  display: flex;

  a {
    position: relative;
    padding: 12px 20px;
    margin: 0 15px;
    text-decoration: none;
    color: ${props => props.theme.grey};
    opacity: 0.5;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 2px;
    transition: all 0.2s ease-in-out;

    &:last-of-type {
      margin-right: 0;
    }

    &::after {
      display: none;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 100%;
      height: 4px;
      background: ${props => props.theme.gradient};
      border-radius: 5px;
      -moz-box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.15);
      -webkit-box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.15);
    }

    &.active,
    &:hover {
      opacity: 1;
      background: ${props => props.theme.gradient};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &.active {
      cursor: default;

      &::after {
        display: block;
      }
    }
  }
`

export default () => {
  const isPartiallyActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? { className: "active" } : null
  }

  return (
    <Header>
      <LogoContainer>
        <Link to="/">
          <img src={Logo} alt="Tagger" />
        </Link>
      </LogoContainer>

      <Nav className="desktop">
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
      </Nav>

      <Sidebar />
    </Header>
  )
}

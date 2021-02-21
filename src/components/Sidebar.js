import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { slide as Menu } from "react-burger-menu"

const Container = styled.div`
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.5) !important;
    top: 0;
    left: 0;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 26px;
    height: 20px;
    top: 35px;
    right: 25px;
    cursor: pointer;

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      border-radius: 6px;
      background: ${props => props.theme.gradient};
    }

    button {
      outline: none;
    }
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    position: absolute !important;
    width: 26px !important;
    height: 20px !important;
    top: 35px !important;
    right: 25px !important;
    cursor: pointer;

    span {
      position: absolute !important;
      top: 4px !important;
      right: 0px !important;

      /* Color/shape of close button cross */
      .bm-cross {
        background: ${props => props.theme.mediumGrey};
        border-radius: 6px;
        width: 26px !important;
        height: 4px !important;
      }
    }

    button {
      outline: none;
    }
  }

  /* Styling for menu */
  .bm-menu-wrap {
    top: 0;

    .bm-menu {
      background: #373a47;
      padding: 2.5em 0;
      font-size: 1.15em;
      overflow: hidden !important;

      .bm-item-list {
        color: #b8b7ad;
        margin-top: 60px;
        flex-direction: column;

        a {
          opacity: 0.9;
          margin: 0 0 20px;
          padding: 30px 35px;
          outline: none;
          color: ${props => props.theme.grey};
          text-decoration: none;
          font-family: ${props => props.theme.defaultFont};
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 2px;
          transition: all 0.2s ease-in-out;

          &.active {
            &::after {
              display: none;
            }
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
      }
    }
  }

  @media (max-width: 1280px) {
    .bm-burger-button {
      right: 100px !important;
    }

    .bm-cross-button {
      right: 35px !important;
    }
  }

  @media (max-width: 768px) {
    .bm-burger-button {
      right: 50px !important;
    }

    .bm-cross-button {
      right: 35px !important;
    }
  }

  @media (max-width: 480px) {
    .bm-burger-button {
      right: 25px !important;
    }

    .bm-cross-button {
      right: 25px !important;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .bm-menu-wrap {
      width: 45% !important;
    }

    @media (min-width: 320px) and (max-width: 767px) {
      .bm-menu-wrap {
        width: 70% !important;
      }
    }
  }
`

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const isPartiallyActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? { className: "active" } : null
  }

  return (
    <Container className="mobile">
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
    </Container>
  )
}

export default Sidebar

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/logo.png"

const Footer = styled.footer`
  flex-shrink: 0; // used to keep footer at bottom
  width: 100%;
  background: #111;
  padding: 25px 0;
  display: flex;
  justify-content: center;
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

export default () => (
  <Footer>
    <LogoContainer>
      <Link to="/">
        <img src={Logo} alt="Tagger" />
      </Link>
    </LogoContainer>
  </Footer>
)

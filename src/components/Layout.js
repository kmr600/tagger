import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import "@fontsource/lobster/400.css"
import "@fontsource/josefin-sans/400.css"
import "@fontsource/josefin-sans/600.css"
import "@fontsource/josefin-sans/700.css"
import GlobalStyle from "../styles/global"
import { themes } from "../styles/themes"
import Header from "./Header"
import Footer from "./Footer"

const currentTheme = () => ({
  ...themes["common"],
})

const Container = styled.div`
  flex: 1 0 auto; // used to keep footer at bottom
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    max-width: none;
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    max-width: none;
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    max-width: none;
    padding: 0 25px;
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />

      <div id="page">
        <Container>
          <Header />

          <main>{children}</main>
        </Container>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

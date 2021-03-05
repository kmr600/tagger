import { createGlobalStyle } from "styled-components"
import Reset from "./reset"

const GlobalStyle = createGlobalStyle`
${Reset}

*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  position: relative;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
  font-family: ${props => props.theme.defaultFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: color .22s ease-in-out, background-color .22s ease-in-out;
}
#page {
  min-height: 100vh; // used to keep footer at bottom
  display: flex;
  flex-direction: column;
}
main {
  margin: 90px 0;
}
h1 {
  font-family: ${props => props.theme.josefin};
  font-size: 3.2rem;
  letter-spacing: 2px;
  line-height: 1.1;
}
h4 {
  font-family: ${props => props.theme.josefin};
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.2;
}
p {
  font-family:${props => props.theme.josefin};
  font-size: 0.9rem;
  color: ${props => props.theme.grey};
  letter-spacing: 2px;
  line-height: 1.8;
}
section {
  width: 100%;
}
.content {
  width: 100%;
}
.notification-container {
  .notification {
    border-radius: 8px;
    -webkit-box-shadow: 0px 10px 18px -1px rgba(0, 0, 0, 0.38);
    -moz-box-shadow: 0px 10px 18px -1px rgba(0, 0, 0, 0.38);
    box-shadow: 0px 10px 18px -1px rgba(0, 0, 0, 0.38);
    .Toastify__toast-body {
      text-align: center;
    }
  }
}

/*
  Desktop/mobile only displays
*/
@media (min-width: 1025px) {
  .desktop {
    display: block !important;
  }
  .mobile {
    display: none !important;
  }
}
@media (max-width: 1024px) {
  .desktop {
    display: none !important;
  }
  .mobile {
    display: block !important;
  }
}

/*
  iOS fixes:
  "Font-size" fixes the issue with zoom in on iOS
  "appearance" fixes box-shadow not showing on iOS
*/
@media (max-width: 1024px) {
  textarea,
  input,
  label[for="file"] {
    font-size: 16px !important;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
}
`

export default GlobalStyle

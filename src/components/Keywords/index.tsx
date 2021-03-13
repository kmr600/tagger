import React from "react"
import styled from "styled-components"
import GeneratedKeywords from "./GeneratedKeywords"
import CopyToClipboard from "./CopyToClipboard"

const Container = styled.section`
  margin: 150px auto 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    margin-top: 80px;
  }
`

const Heading = styled.h4`
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
`

export default () => (
  <Container>
    <Heading>
      Click keywords to add them as hashtags to the photo above.
    </Heading>

    <GeneratedKeywords />

    <CopyToClipboard />
  </Container>
)

import React from "react"
import styled from "styled-components"
import UploadImageForm from "./UploadImageForm"

const Upload = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${props => props.theme.josefin};

  @media (max-width: 1024px) {
    width: 100%;
    order: 1;
    flex: auto;
  }
`

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.1;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
`

const Paragraph = styled.p`
  margin-top: 40px;
  font-size: 1.1rem;
  letter-spacing: 2px;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }
`

const UploadOptions = styled.div`
  width: 100%;
  margin-top: 60px;
`

export default () => (
  <Upload>
    <Intro>
      <Heading>
        Welcome to
        <br />
        Tagger
      </Heading>
      <Paragraph>Your go to hashtag generator</Paragraph>
    </Intro>

    <UploadOptions>
      <UploadImageForm />
    </UploadOptions>
  </Upload>
)

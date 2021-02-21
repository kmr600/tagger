import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import GradientBtn from "../components/GradientButton"

const Page = styled.div`
  width: 100%;
`

const Heading = styled.h1`
  margin-bottom: 55px;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const InfoText = styled.p`
  font-family: ${props => props.theme.defaultFont};
  max-width: 90%;
  color: ${props => props.theme.grey};

  @media (max-width: 1024px) {
    max-width: none;
  }
`

const GradientButton = styled(GradientBtn)`
  margin-top: 80px;
  margin-right: auto;

  @media (max-width: 1024px) {
    margin: 60px auto 0;
  }
`

const ThanksPage = () => (
  <Layout>
    <SEO title="Thanks" />

    <Page>
      <Heading>Thanks!</Heading>

      <Content>
        <Info>
          <InfoText>
            We appreciate you contacting us. We'll respond to you as soon as
            possible.
          </InfoText>

          <GradientButton to="/">Return Home</GradientButton>
        </Info>
      </Content>
    </Page>
  </Layout>
)

export default ThanksPage

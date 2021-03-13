import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import FlowchartImage from "../components/Images/FlowchartImage"
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
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const Info = styled.div`
  width: 50%;
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

const FlowchartContainer = styled.div`
  width: 50%;

  .gatsby-image-wrapper {
    margin: 0 auto;
    max-width: 80%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 70%;
    margin: 60px auto 0;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    margin-top: 60px;
  }
`

const GradientButton = styled(GradientBtn)`
  margin-top: 80px;
  margin-right: auto;

  @media (max-width: 1024px) {
    margin: 60px auto 0;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <Page>
      <Heading>About</Heading>

      <Content>
        <Info>
          <InfoText>
            Tagger is a hashtag generator that allows users to reach a larger
            audience on socials. Using machine learning and visual recognition,
            we provide accurate results based on your media, allowing you to
            gain more visibility for your posts.
          </InfoText>

          <GradientButton to="/contact" className="desktop">
            Contact
          </GradientButton>
        </Info>

        <FlowchartContainer>
          <FlowchartImage />
        </FlowchartContainer>

        <GradientButton to="/contact" className="mobile">
          Contact
        </GradientButton>
      </Content>
    </Page>
  </Layout>
)

export default AboutPage

import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import FlowchartImage from "../components/Images/FlowchartImage"
import GradientButton from "../components/GradientButton"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <div id="about-page">
      <h1>About</h1>

      <div className="about-content">
        <div className="info">
          <p>
            Tagger is a hashtag generator that gives users an up on their social
            media posts. With the help of Clarifai’s API, Tagger uses machine
            learning and visual recognition to provide accurate results.
          </p>

          <GradientButton to="/contact" className="desktop">
            Contact
          </GradientButton>
        </div>

        <div className="flowchart">
          <FlowchartImage />
        </div>

        <GradientButton to="/contact" className="mobile">
          Contact
        </GradientButton>
      </div>
    </div>
  </Layout>
)

export default AboutPage

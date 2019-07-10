import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import GradientButton from "../components/GradientButton"

const ThanksPage = () => (
  <Layout>
    <SEO title="Thanks" />

    <div id="thanks-page">
      <h1>Thanks!</h1>

      <div className="thanks-content">
        <div className="info">
          <p>
            We appreciate you contacting us. We'll respond to you as soon as
            possible.
          </p>

          <GradientButton to="/">Return Home</GradientButton>
        </div>
      </div>
    </div>
  </Layout>
)

export default ThanksPage

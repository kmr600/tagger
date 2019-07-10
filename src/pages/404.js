import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import GradientButton from "../components/GradientButton"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div id="not-found-page">
      <h1>#404</h1>

      <div className="not-found-content">
        <p>You just hit a page that doesn&#39;t exist... the sadness.</p>

        <GradientButton to="/">Return Home</GradientButton>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

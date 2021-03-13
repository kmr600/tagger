import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FlowchartImage = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "flowchart.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.file.childImageSharp.fluid} />}
  />
)

export default FlowchartImage

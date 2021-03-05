import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HashtagsImage = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "hashtags.png" }) {
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

export default HashtagsImage

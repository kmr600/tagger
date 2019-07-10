import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Prev5Image = () => (
  <StaticQuery
    query={graphql`
      query {
        previewImage: file(relativePath: { eq: "beach.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 380) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.previewImage.childImageSharp.fluid} />}
  />
)

export const Prev5Hashtags = () => {
  const hashtags = ["#summer", "#beach", "#travel", "#vacation", "#tagger"]

  return hashtags.map((hashtag, index) => (
    <li key={index} className="hashtag">
      {hashtag}
    </li>
  ))
}

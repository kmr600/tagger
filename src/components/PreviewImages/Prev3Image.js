import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Prev3Image = () => (
  <StaticQuery
    query={graphql`
      query {
        previewImage: file(relativePath: { eq: "cliff.jpg" }) {
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

export const Prev3Hashtags = () => {
  const hashtags = ["#sunset", "#hike", "#adventure", "#travel", "#tagger"]

  return hashtags.map((hashtag, index) => (
    <li key={index} className="hashtag">
      {hashtag}
    </li>
  ))
}

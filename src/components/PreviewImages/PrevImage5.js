import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const PrevImage5 = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "beach.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 380) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.file.childImageSharp.fluid} />}
  />
)

export const PrevHashtags5 = () => {
  const hashtags = ["#summer", "#beach", "#travel", "#vacation", "#tagger"]

  return hashtags.map((hashtag, index) => (
    <li key={index} className="hashtag">
      {hashtag}
    </li>
  ))
}

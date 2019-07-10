import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Prev1Image = () => (
  <StaticQuery
    query={graphql`
      query {
        previewImage: file(relativePath: { eq: "monochrome.jpg" }) {
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

export const Prev1Hashtags = () => {
  const hashtags = [
    "#monochorome",
    "#technology",
    "#business",
    "#fashion",
    "#tagger",
  ]

  return hashtags.map((hashtag, index) => (
    <li key={index} className="hashtag">
      {hashtag}
    </li>
  ))
}

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Prev4Image = () => (
  <StaticQuery
    query={graphql`
      query {
        previewImage: file(relativePath: { eq: "band.jpg" }) {
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

export const Prev4Hashtags = () => {
  const hashtags = [
    "#concert",
    "#performance",
    "#guitar",
    "#rock",
    "#indie",
    "#tagger",
  ]

  return hashtags.map((hashtag, index) => (
    <li key={index} className="hashtag">
      {hashtag}
    </li>
  ))
}

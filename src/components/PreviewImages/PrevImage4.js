import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Hashtag } from "../Preview/PreviewStyles"

export const PrevImage4 = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "band.jpg" }) {
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

export const PrevHashtags4 = () => {
  const hashtags = [
    "#concert",
    "#performance",
    "#guitar",
    "#rock",
    "#indie",
    "#tagger",
  ]

  return hashtags.map((hashtag, index) => (
    <Hashtag key={index}>{hashtag}</Hashtag>
  ))
}

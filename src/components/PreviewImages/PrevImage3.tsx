import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Hashtag } from "../Preview/PreviewStyles"

export const PrevImage3 = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "cliff.jpg" }) {
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

export const PrevHashtags3 = () => {
  const hashtags = ["#sunset", "#hike", "#adventure", "#travel", "#tagger"]

  return (
    <>
      {hashtags.map((hashtag, index) => (
        <Hashtag key={index}>{hashtag}</Hashtag>
      ))}
    </>
  )
}

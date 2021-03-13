import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Hashtag } from "../Preview/PreviewStyles"

export const PrevImage1 = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "monochrome.jpg" }) {
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

export const PrevHashtags1 = () => {
  const hashtags = [
    "#monochorome",
    "#technology",
    "#business",
    "#fashion",
    "#tagger",
  ]

  return (
    <>
      {hashtags.map((hashtag, index) => (
        <Hashtag key={index}>{hashtag}</Hashtag>
      ))}
    </>
  )
}

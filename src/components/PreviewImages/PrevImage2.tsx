import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Hashtag } from "../Preview/PreviewStyles"

export const PrevImage2 = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "sunglasses.jpg" }) {
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

export const PrevHashtags2 = () => {
  const hashtags = [
    "#portrait",
    "#sunglasses",
    "#trendy",
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

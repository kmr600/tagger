import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const PrevImage6 = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "dog.jpg" }) {
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

export const PrevHashtags6 = () => {
  const hashtags = ["#dog", "#snow", "#winter", "#friendship", "#tagger"]

  return hashtags.map((hashtag, index) => (
    <li key={index} className="hashtag">
      {hashtag}
    </li>
  ))
}

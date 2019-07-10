import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Prev6Image = () => (
  <StaticQuery
    query={graphql`
      query {
        previewImage: file(relativePath: { eq: "dog.jpg" }) {
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

export const Prev6Hashtags = () => {
  const hashtags = ["#dog", "#snow", "#winter", "#friendship", "#tagger"]

  return hashtags.map((hashtag, index) => (
    <li key={index} className="hashtag">
      {hashtag}
    </li>
  ))
}

// environment variables
require("dotenv").config({
  path: `.env.${process.env.GATSBY_CLARIFAI_API_KEY}`,
  path: `.env.${process.env.GATSBY_CLOUDINARY_URL}`,
  path: `.env.${process.env.GATSBY_CLOUDINARY_UPLOAD_PRESET}`,
})

module.exports = {
  siteMetadata: {
    title: `Tagger`,
    description: `Hashtag generator that uses machine learning and visual recognition.`,
    author: `Kyle Smith <contact@kylesmith.digital>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

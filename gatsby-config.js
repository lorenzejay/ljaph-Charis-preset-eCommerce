/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env`,
})
const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Charis Cheung Presets",
    author: "Charis Cheung",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Images`,
        path: path.join(__dirname, "src", "Images"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        //domain of shopify shop
        shopName: process.env.SHOP_NAME,

        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
  ],
}

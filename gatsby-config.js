module.exports = {
  siteMetadata: {
    title: `Bijentuin Plantasia`,
    description: `Bijentuin Plantasia is een bijentuin in het Erasmuspark in Amsterdam West.`,
    author: `Maatje van der Veer`,
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
        name: `Bijentuin Plantasia, Erasmuspark, Amsterdam West`,
        short_name: `Plantasia`,
        start_url: `/`,
        background_color: `#0FB270`,
        theme_color: `#0FB270`,
        display: `minimal-ui`,
        icon: `src/images/plantasia-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

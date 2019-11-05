require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Cara - Gatsby Starter Portfolio`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ammar Website`,
        short_name: `Ammar`,
        description: `Personal website, Ammar Jabakji.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-htaccess`,
    `gatsby-plugin-modal-routing`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};

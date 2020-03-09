module.exports = {
  siteMetadata: {
    title: `Michael Cacciano`,
    description: `Full Stack Javascript Developer`,
    author: `Michael Cacciano`,
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
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
        name: `Michael Cacciano Portfolio`,
        short_name: `MCacciano`,
        start_url: `/`,
        background_color: `#0f4c75`,
        theme_color: `#0f4c75`,
        display: `minimal-ui`,
        icon: `src/images/mobile-hero-1.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ye5mguwx',
        dataset: 'production',
        overlayDrafts: true,
        watchMode: true,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto',
            variants: ['100', '300', '400', '700', '900'],
          },
          {
            family: 'Rubik',
            variants: ['100', '300', '400', '700', '900'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/preview/*`] },
    },
  ],
}

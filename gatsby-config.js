module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/src/site/notes`,
        rootNote: `/index`,
      },
    },
    `gatsby-plugin-netlify`
  ],
  siteMetadata: {
    title: '이세계 향수공방',
  },
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/src/site/notes`,
        rootNote: `/index`,
      },
    },
    `gatsby-plugin-netlify`,
    `obsidian-kanban`
  ],
  siteMetadata: {
    title: '이세계 향수공방',
  },
}

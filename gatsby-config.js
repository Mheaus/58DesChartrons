const path = require('path')

module.exports = {
  siteMetadata: {
    title: '58DesChartrons',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins.  You can source data nodes from anywhere but
     * most sites, like Gatsbygram, will include data from
     * the filesystem so we start here with
     * “gatsby-source-filesystem”.
     *
     * A site can have as many instances of
     * gatsby-source-filesystem as you need.  Each plugin
     * instance is configured with a root path where it then
     * recursively reads in files and adds them to the data
     * tree.
     */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: path.join(__dirname, 'data'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`, // you can use multiple source-filesystem instances
        path: path.join(__dirname, 'data'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-sharp`,
    // This plugin transforms JSON file nodes.
    'gatsby-transformer-json',
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
  ],
}

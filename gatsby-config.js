module.exports = {
  siteMetadata: {
    title: 'Alchematrix',
    description: 'Free your mind :: the alchemy of the matrix',
    tagLine: 'Free your mind',
    author: '@alchematrix0',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  	'gatsby-transformer-remark',
  	{
  		resolve: `gatsby-source-filesystem`,
  		options: {
  			name: `pages`,
  			path: `${__dirname}/src/pages/`
  		}
  	},
    'gatsby-plugin-sass'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

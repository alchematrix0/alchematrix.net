module.exports = {
  siteMetadata: {
    title: 'Alchematrix :: the alchemy of the matrix',
    description: 'Free your mind :: the alchemy of the matrix. A blog for modern seekers and adventurers, students of tarot, technology innovators and contemporary spiritual warriors.',
    tagLine: 'Free your mind',
    author: '@alchematrix0',
    url: `https://alchematrix.net`,
    keywords: ['alchemy', 'matrix', 'blog', 'archery', 'adventure', 'hiking', 'trip', 'report', 'tarot', 'esoteric', 'wisdom', 'warrior', 'school', 'spiritual', 'scientist', 'recipes', 'knowledge', 'mantra'],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tracks`,
        path: `${__dirname}/src/music`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Alchematrix :: The Alchemy of the Matrix',
        short_name: 'Alchematrix',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/crescent-sun.png', // This path is relative to the root of the site.
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
  	{
  		resolve: `gatsby-source-filesystem`,
  		options: {
  			name: `lyrics`,
  			path: `${__dirname}/src/music/lyrics/`
  		}
  	},
    'gatsby-plugin-sass'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

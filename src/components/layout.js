import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './bulma.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            tagLine,
            description
          }
        }
      }
    `}
    render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} tagLine={data.site.siteMetadata.tagLine} />
          <div
            style={{
              margin: '100px auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </>
      )
    }
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

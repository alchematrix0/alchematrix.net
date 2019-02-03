import React from 'react'
import { Link } from 'gatsby'

const Footer = ({prev, next}) => (
  <div className="columns footer blogpostFooter">
    <div className="column is-9">
      {prev && (
        <Link to={prev.frontmatter.path}>
          <span role="img" aria-label="point-left">👈{'  '}</span>
          <b>{prev.frontmatter.title}</b>
        </Link>
      )}
    </div>
    <div className="column is-3 is-pulled-right">
      {next && (
        <Link to={next.frontmatter.path}>
        <b>{next.frontmatter.title}{' '}</b>
        <span role="img" aria-label="point-right">👉</span>
        </Link>
        )}
      </div>
    </div>
  )

  export default Footer

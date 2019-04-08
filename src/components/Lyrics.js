import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Lyrics = () => (
  <StaticQuery
    query={graphql`
      query Lyrics {
        allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/music/lyrics/*.md" } }) {
          totalCount
          edges {
            node {
              html
              frontmatter {
                title
                path
                excerpt
              }
            }
          }
        }
      }
    `}
    render={data => data.allMarkdownRemark.edges.sort((a, b) => Number(a.node.frontmatter.excerpt) - Number(b.node.frontmatter.excerpt)).map((edge, index) => (
      <div id={edge.node.frontmatter.title} className="box content">
        <h4 className="title">{edge.node.frontmatter.title}</h4>
        <div className="" dangerouslySetInnerHTML={{ __html: edge.node.html }} />
      </div>
    ))}
  />
)

export default Lyrics

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const About = ({ data, pageContext }) => {
  const html = data.markdownRemark.html;
  return (
    <Layout>
      <div className="blogpost content" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
	query StaticPage {
		markdownRemark(frontmatter: { path: { eq: "/about" } }) {
			html
			frontmatter {
				title
				date(formatString: "MMMM, DD, YYYY")
				path
				tags
				excerpt
				author
        cover {
          publicURL
        }
				image {
					publicURL
				}
			}
		}
	}
`;

export default About

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const About = ({ data, pageContext }) => {
  const title = data.markdownRemark.frontmatter.title;
  const html = data.markdownRemark.html;
  return (
    <Layout>
      <SEO title={title} />
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
				image {
					publicURL
				}
			}
		}
	}
`;

export default About

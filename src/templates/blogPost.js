import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout.js'
import Footer from '../components/blogpostFooter.js'

const Template = ({ data, pageContext }) => {
	const title = data.markdownRemark.frontmatter.title;
	const date = data.markdownRemark.frontmatter.date;
	const author = data.markdownRemark.frontmatter.author;
	const html = data.markdownRemark.html;
  const { next, prev } = pageContext;

	return (
		<Layout>
			<h1 className="title">{title}</h1>
      <div>
        <em>{author} - {date}</em>
      </div>
      <br />
			<div className="blogpost content" dangerouslySetInnerHTML={{ __html: html }} />
      <Footer prev={prev} next={next} />
		</Layout>
	);
};

export const postQuery = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
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

export default Template;

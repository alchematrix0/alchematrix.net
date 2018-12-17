import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout.js'

const Template = ({ data, pageContext }) => {
	const title = data.markdownRemark.frontmatter.title;
	const date = data.markdownRemark.frontmatter.date;
	const html = data.markdownRemark.html;
  const { next, prev } = pageContext;

	return (
		<Layout>
			<h1 className="title">{title}</h1>
      <div>
        <em>{date}</em>
      </div>
      <br />
			<div className="blogpost content" dangerouslySetInnerHTML={{ __html: html }} />
      <div className="columns">
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

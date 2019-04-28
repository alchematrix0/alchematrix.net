import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.js'
import Footer from '../components/blogpostFooter.js'

const Template = ({ data, pageContext }) => {
	const {title, date, author } = data.markdownRemark.frontmatter
	const html = data.markdownRemark.html;
  const { next, prev } = pageContext;
	console.dir(data.markdownRemark.frontmatter)

	return (
		<Layout>
			{data.markdownRemark.frontmatter.cover && (
				<img
					className={`coverPhoto ${data.markdownRemark.frontmatter.class === 'work' || data.markdownRemark.frontmatter.class === 'page' || data.markdownRemark.frontmatter.coverStyle === 'fullwidth' ? 'isFull' : 'isNarrow'}`}
					src={data.markdownRemark.frontmatter.cover.publicURL}
					alt={`cover for ${title} blog post`}
				/>
			)}
			<div className="blogpost content" dangerouslySetInnerHTML={{ __html: html }} />
			{data.markdownRemark.frontmatter.class !== 'work' && (
				<div>
					<em>{author} - {date}</em>
				</div>
			)}
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
				subtitle
				subject
				date(formatString: "MMMM, DD, YYYY")
				path
				tags
				excerpt
				author
				class
				coverStyle
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

export default Template;

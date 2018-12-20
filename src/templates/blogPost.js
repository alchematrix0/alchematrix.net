import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout.js'
import Footer from '../components/blogpostFooter.js'

const Template = ({ data, pageContext }) => {
	const title = data.markdownRemark.frontmatter.title;
	const subtitle = data.markdownRemark.frontmatter.subtitle;
	const date = data.markdownRemark.frontmatter.date;
	const author = data.markdownRemark.frontmatter.author;
	const html = data.markdownRemark.html;
  const { next, prev } = pageContext;

	return (
		<Layout>
			{data.markdownRemark.frontmatter.cover && (
				<img
					className={`coverPhoto ${data.markdownRemark.frontmatter.class === 'work' ? 'isFull' : 'isNarrow'}`}
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
				date(formatString: "MMMM, DD, YYYY")
				path
				tags
				excerpt
				author
				class
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

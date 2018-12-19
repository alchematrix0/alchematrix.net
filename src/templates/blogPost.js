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
	console.log(data.markdownRemark.frontmatter.class)

	return (
		<Layout>
			<h1 className="title">{title}</h1>
			{subtitle && (<h4 className="subtitle">{subtitle}</h4>)}
      {data.markdownRemark.frontmatter.class !== 'work' && (
				<div>
					<em>{author} - {date}</em>
				</div>
			)}
      <br />
			{data.markdownRemark.frontmatter.cover && (
				<img
					className={`coverPhoto ${data.markdownRemark.frontmatter.class === 'work' ? 'isFull' : 'isNarrow'}`}
					src={data.markdownRemark.frontmatter.cover.publicURL}
					alt={`cover for ${title} blog post`}
				/>
			)}
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

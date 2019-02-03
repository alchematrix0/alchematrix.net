const path = require('path');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve('src/templates/blogPost.js');
		// Query for markdown nodes to use in creating pages.
		resolve(
			graphql(
				`
					query {
						allMarkdownRemark(
							sort: { order: ASC, fields: [frontmatter___date] }
						) {
							edges {
								node {
									frontmatter {
										path
										title
										tags
										date
										excerpt
										subject
										class
										image {
											publicURL
										}
										author
									}
								}
							}
						}
					}
				`
			).then(result => {
				if (!result.data) {
					return null
				}
				const posts = result.data.allMarkdownRemark.edges;
				posts.forEach(({ node }, index) => {
					const path = node.frontmatter.path;
					let samePostsType = posts.filter(p => p.node.frontmatter.class === node.frontmatter.class)
					index = samePostsType.findIndex(x => x.node.frontmatter.path === node.frontmatter.path)
					createPage({
						path,
						component: blogPostTemplate,
						context: {
							pathSlug: path,
        			next: index === 0 ? null : samePostsType[index - 1].node,
        			prev: index === samePostsType.length - 1 ? null : samePostsType[index + 1].node
						}
					});
					resolve();
				});
			})
		);
	});
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) return Promise.reject(result.errors)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/blog-template.tsx`),
        context: {
          path: node.frontmatter.path
        }
      })
    })
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src')
      }
    }
  })
}

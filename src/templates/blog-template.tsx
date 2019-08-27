import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

const BlogTemplate = ({ data }: any) => {
  console.log(data)
  const {
    markdownRemark: {
      html,
      frontmatter: { title, date }
    }
  } = data
  return (
    <div>
      <SEO title={`${title} Page`} />
      <h1>{`${title} Page`}</h1>
      <div>date : {date}</div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`

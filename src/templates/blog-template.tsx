import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '~/layouts/default'
import Seo from '~/components/base/Seo'

type Props = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

const BlogTemplate: React.FC<Props> = props => (
  <Layout>
    <div>
      <Seo title={props.data.markdownRemark.frontmatter.title} />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div>date : {props.data.markdownRemark.frontmatter.date}</div>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </div>
  </Layout>
)

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

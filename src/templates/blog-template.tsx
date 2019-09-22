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

const BlogTemplate: React.FC<Props> = props => {
  const html = props.data.markdownRemark.html
  const { title, date } = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <div>
        <Seo title={`${title} Page`} />
        <h1>{`${title} Page`}</h1>
        <div>date : {date}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
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

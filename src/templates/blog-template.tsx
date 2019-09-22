import * as React from 'react'
import { graphql } from 'gatsby'
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
const BlogTemplate: React.FC<Props> = (props: Props) => {
  const html = props.data.markdownRemark.html
  const { title, date } = props.data.markdownRemark.frontmatter
  return (
    <div>
      <Seo title={`${title} Page`} />
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

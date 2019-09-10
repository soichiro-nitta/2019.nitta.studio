import React from 'react'
// import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '~/layouts/default'
import Image from '~/components/base/Image'
import SEO from '~/components/base/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    {/* <link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

const ImageWrapper = styled.div`
  margin-top: 30px;
  width: 150px;
`

export default IndexPage

import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
// import { css } from '@emotion/core'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Hi peoplea</Title>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

const Title = styled.h1`
  color: red;
`

export default IndexPage

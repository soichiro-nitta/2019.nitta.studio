import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from '~/components/Header'
import '~/assets/scss/variables.scss'
import '~/assets/scss/default.scss'

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>
        <div>{props.children}</div>
        はじめまして新田聡一郎です。
        <Footer>
          © {new Date().getFullYear()}, Produced by Soichiro Nitta
        </Footer>
      </Main>
    </>
  )
}

const Main = styled.div`
  margin-top: 80px;
  margin-left: 30px;
`
const Footer = styled.div`
  margin-top: 20px;
  /* color: #444; */
`

export default Layout

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from '~/components/base/Header'
import Example from '~/components/Example'
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
      <HeaderWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
      </HeaderWrapper>
      <Example
        text="Exampleのテキスト"
        flag={true}
        action={() => console.log('this is log')}
      />
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

const HeaderWrapper = styled.div`
  position: fixed;
  top: 30px;
  left: 30px;
`
const Main = styled.div`
  margin-top: 80px;
  margin-left: 30px;
`
const Footer = styled.div`
  margin-top: 20px;
  /* color: #444; */
`

export default Layout

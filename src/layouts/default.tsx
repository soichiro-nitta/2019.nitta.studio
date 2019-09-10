import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from '~/components/default/Header'
import Example from '~/components/Example'
import '~/assets/scss/variables.scss'
import '~/assets/scss/default.scss'

const Layout: React.FC = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const text = 'text'
  const flag = true
  const action = () => {
    console.log(text)
  }
  return (
    <>
      <HeaderWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
      </HeaderWrapper>
      <Example text={text} flag={flag} action={action} />
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

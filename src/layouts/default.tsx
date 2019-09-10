import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from '~/components/default/Header'
import Background from '~/components/default/Background'
// import Example from '~/components/Example'
import '~/assets/scss/variables.scss'
import '~/assets/scss/default.scss'
import '~/components/default/Background'

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
  // const text = 'text'
  // const flag = true
  // const action = () => {
  //   console.log(text)
  // }
  return (
    <>
      <HeaderWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
      </HeaderWrapper>

      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      {/* <Example text={text} flag={flag} action={action} /> */}
      <Main>
        はじめまして新田聡一郎です。
        <div>{props.children}</div>
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
  z-index: 1;
`
const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`
const Main = styled.div`
  padding-top: 80px;
  padding-left: 70px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  z-index: 0;
`
const Footer = styled.div`
  margin-top: 20px;
  /* color: #444; */
`

export default Layout

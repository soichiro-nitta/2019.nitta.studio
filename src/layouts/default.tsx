import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from '~/components/default/Header'
import Background from '~/components/default/Background'
import Dashboard from '~/components/default/Dashboard'
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
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <HeaderWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
      </HeaderWrapper>
      <DashboardWrapper>
        <Dashboard />
      </DashboardWrapper>
      {/* <Example text={text} flag={flag} action={action} /> */}
      <Main>
        {props.children}
        <Footer>
          © {new Date().getFullYear()}, Produced by Soichiro Nitta
        </Footer>
      </Main>
    </>
  )
}

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`
const HeaderWrapper = styled.div`
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 1;
`
const DashboardWrapper = styled.div`
  position: fixed;
  top: 90px;
  z-index: 1;
`
const Main = styled.div`
  padding-top: 90px;
  padding-left: 70px;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 0;
`
const Footer = styled.div`
  margin: 30px 0 30px;
  /* color: #444; */
`

export default Layout

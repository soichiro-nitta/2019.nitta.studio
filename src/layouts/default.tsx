import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Div100vh from 'react-div-100vh'
import Header from '~/components/default/Header'
import Background from '~/components/default/Background'
import Dashboard from '~/components/default/Dashboard'
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
  return (
    <Root>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <HeaderWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
      </HeaderWrapper>
      <DashboardWrapper>
        <Dashboard />
      </DashboardWrapper>
      <Main id="main">
        {props.children}
        <Footer>
          © {new Date().getFullYear()}, Produced by Soichiro Nitta
        </Footer>
      </Main>
    </Root>
  )
}

const Root = styled(Div100vh)`
  width: 100%;
  height: 100%;
`
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
  top: 20px;
  left: 22.5px;
  z-index: 1;
`
const DashboardWrapper = styled.div`
  position: fixed;
  top: 89px;
  left: 25px;
  z-index: 1;
`
const Main = styled.div`
  position: relative;
  padding: 86px 23.5px 0 89.5px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 0;
`
const Footer = styled.div`
  margin: 30px 0 30px;
`

export default Layout

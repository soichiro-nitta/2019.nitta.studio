import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Div100vh from 'react-div-100vh'
import styled from '~/utils/emotion'
import Theme from '~/components/default/Theme'
import Header from '~/components/default/Header'
import Background from '~/components/default/Background'
import Dashboard from '~/components/default/Dashboard'
import Statusbar from '~/components/default/Statusbar'

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
    <Theme>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <HeaderWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
      </HeaderWrapper>
      <DashboardWrapper>
        <Dashboard />
      </DashboardWrapper>
      <StatusbarWrapper>
        <Statusbar />
      </StatusbarWrapper>
      <Main id="main">
        {props.children}
        <Footer>
          © {new Date().getFullYear()}, Produced by Soichiro Nitta
        </Footer>
      </Main>
    </Theme>
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
  top: ${(props): number => (props.theme.sizes.phone.dashboard - 30) / 2 + 2}px;
  left: ${(props): number =>
    (props.theme.sizes.phone.dashboard - 30) / 2 + 3.3}px;
  z-index: 1;
`
const DashboardWrapper = styled.div`
  position: fixed;
  top: ${(props): number =>
    props.theme.sizes.phone.dashboard +
    (props.theme.sizes.phone.dashboard - 30) / 2 +
    6}px;
  left: ${(props): number => (props.theme.sizes.phone.dashboard - 18) / 2}px;
  z-index: 1;
`
const StatusbarWrapper = styled(Div100vh)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`
const Main = styled.div`
  padding-top: ${(props): number =>
    props.theme.sizes.phone.dashboard +
    (props.theme.sizes.phone.dashboard - 30) / 2 +
    2}px;
  padding-right: ${(props): number =>
    (props.theme.sizes.phone.dashboard - 18) / 2}px;
  padding-bottom: 0;
  padding-left: ${(props): number =>
    props.theme.sizes.phone.dashboard +
    (props.theme.sizes.phone.dashboard - 18) / 2 +
    1}px;
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
  margin: 30px 0 22px;
`

export default Layout

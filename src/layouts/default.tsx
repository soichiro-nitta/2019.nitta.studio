import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Header from '~/components/header'
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

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

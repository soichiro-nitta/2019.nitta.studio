import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

interface Props {
  siteTitle: string
}

const Header = (props: Props) => (
  <Root>
    <Link to="/">{props.siteTitle}</Link>
  </Root>
)

const Root = styled.h1`
  display: inline-block;
  position: fixed;
  top: 30px;
  left: 30px;
  font-size: 30px;
  line-height: 1;
`

export default Header

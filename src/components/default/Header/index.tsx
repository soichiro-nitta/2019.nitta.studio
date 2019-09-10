import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

type Props = {
  siteTitle: string
}

const Header: React.FC<Props> = props => (
  <Root>
    <Link to="/">{props.siteTitle}</Link>
    <Border />
  </Root>
)

const Root = styled.h1`
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
`
const Border = styled.div`
  position: fixed;
  top: 60px;
  left: 30px;
  width: 1px;
  height: 100%;
  background: #e5e5e5;
`

export default Header

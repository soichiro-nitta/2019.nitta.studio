import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

type Props = {
  siteTitle: string
}

const Header: React.FC = (props: Props) => (
  <Root>
    <Link to="/">{props.siteTitle}</Link>
  </Root>
)

const Root = styled.h1`
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
`

export default Header

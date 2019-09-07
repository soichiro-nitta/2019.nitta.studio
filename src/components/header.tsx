import { Link } from 'gatsby'
import React from 'react'

interface Props {
  siteTitle: string
}

const Header = (props: Props) => (
  <header>
    <h1>
      <Link to="/">{props.siteTitle}</Link>
    </h1>
  </header>
)

export default Header

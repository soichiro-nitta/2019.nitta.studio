import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faCode,
  faSmileWink,
  faFeatherAlt,
  faBook
} from '@fortawesome/pro-duotone-svg-icons'

const Dashboard: React.FC = () => (
  <>
    <Icon to="/">
      <FontAwesomeIcon icon={faHome} />
    </Icon>
    <Icon to="/works">
      <FontAwesomeIcon icon={faCode} />
    </Icon>
    <Icon to="/tweet">
      <FontAwesomeIcon icon={faFeatherAlt} />
    </Icon>
    <Icon to="/diary">
      <FontAwesomeIcon icon={faBook} />
    </Icon>
    <Icon to="/about">
      <FontAwesomeIcon icon={faSmileWink} />
    </Icon>
  </>
)

const Icon = styled(Link)`
  display: block;
  :not(:first-of-type) {
    margin-top: 45px;
  }
  width: 100%;
  height: 16px;
  text-align: center;
  overflow: hidden;
  svg {
    color: #555;
    font-size: 16px;
    height: 16px;
    vertical-align: top;
  }
`

export default Dashboard

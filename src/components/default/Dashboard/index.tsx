import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faWindow,
  faSmileWink,
  faBook
} from '@fortawesome/pro-duotone-svg-icons'

const Dashboard: React.FC = () => (
  <>
    <Icon to="/">
      <FontAwesomeIcon icon={faHome} />
    </Icon>
    <Icon to="/page-2">
      <FontAwesomeIcon icon={faWindow} />
    </Icon>
    <Icon to="/">
      <FontAwesomeIcon icon={faSmileWink} />
    </Icon>
    <Icon to="/page-2">
      <FontAwesomeIcon icon={faBook} />
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

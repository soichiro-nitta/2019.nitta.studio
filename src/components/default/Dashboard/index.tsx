import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faDesktop,
//   faHomeLgAlt,
//   faSmileWink
// } from '@fortawesome/pro-regular-svg-icons'
import {
  faHome,
  faWindow,
  faSmileWink,
  faBook
} from '@fortawesome/pro-duotone-svg-icons'

const Dashboard: React.FC = () => (
  <Root>
    {/* <Icon to="/">
      <FontAwesomeIcon icon={faHomeLgAlt} />
    </Icon>
    <Icon to="/page-2">
      <FontAwesomeIcon icon={faDesktop} />
    </Icon>
    <Icon to="/">
      <FontAwesomeIcon icon={faSmileWink} />
    </Icon> */}
    <Icon to="/">
      <FontAwesomeIcon icon={faHome} />
    </Icon>
    <Icon to="/">
      <FontAwesomeIcon icon={faWindow} />
    </Icon>
    <Icon to="/">
      <FontAwesomeIcon icon={faSmileWink} />
    </Icon>
    <Icon to="/">
      <FontAwesomeIcon icon={faBook} />
    </Icon>
  </Root>
)

const Root = styled.div`
  margin-left: 25px;
`
const Icon = styled(Link)`
  display: block;
  :not(:first-child) {
    margin-top: 45px;
  }
  width: 100%;
  height: 16px;
  text-align: center;
  overflow: hidden;
  svg {
    font-size: 16px;
    height: 16px;
    vertical-align: top;
  }
`

export default Dashboard

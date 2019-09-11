import * as React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDesktop,
  faHomeLgAlt,
  faSmileWink
} from '@fortawesome/pro-regular-svg-icons'

const Dashboard: React.FC = () => (
  <Root>
    <Icon>
      <FontAwesomeIcon icon={faHomeLgAlt} />
    </Icon>
    <Icon>
      <FontAwesomeIcon icon={faDesktop} />
    </Icon>
    <Icon>
      <FontAwesomeIcon icon={faSmileWink} />
    </Icon>
  </Root>
)

const Root = styled.div`
  margin-left: 25px;
`
const Icon = styled.div`
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

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
      <FontAwesomeIcon icon={faDesktop} />
    </Icon>
    <Icon>
      <FontAwesomeIcon icon={faHomeLgAlt} />
    </Icon>
    <Icon>
      <FontAwesomeIcon icon={faSmileWink} />
    </Icon>
  </Root>
)

const size = 32
const Root = styled.div`
  width: ${size * 2 + 1}px;
  height: calc(100% - 90px);
`
const Icon = styled.div`
  :not(:first-child) {
    margin-top: 30px;
  }
  width: 100%;
  text-align: center;
  overflow: hidden;
  svg {
    font-size: 15px;
  }
`

export default Dashboard

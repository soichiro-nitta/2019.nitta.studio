import * as React from 'react'
import { Link } from 'gatsby'
import styled from '~/utils/emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faFeatherAlt,
  faBook,
  faSmileWink,
  faFillDrip,
  faVolumeSlash
} from '@fortawesome/pro-duotone-svg-icons'

const Dashboard: React.FC = () => (
  <>
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
    <Border />
    <Icon to="/about">
      <FontAwesomeIcon icon={faFillDrip} />
    </Icon>
    <Icon to="/about">
      <FontAwesomeIcon icon={faVolumeSlash} />
    </Icon>
  </>
)

const margin = 43
const Icon = styled(Link)`
  display: block;
  :not(:first-of-type) {
    margin-top: ${margin}px;
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
const Border = styled.div`
  margin: ${margin}px auto 0;
  width: 100%;
  height: 1px;
  background: #e5e5e5;
`

export default Dashboard

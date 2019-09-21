import * as React from 'react'
import styled from '~/utils/emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-duotone-svg-icons'

const Twitter: React.FC = () => {
  return (
    <Root
      href="https://twitter.com/soichiro_nitta"
      target="_blank"
      rel="noopener noreferrer"
    >
      近況報告はTwitterにて
      <FontAwesomeIcon icon={faLongArrowRight} />
    </Root>
  )
}

const Root = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 10px;
  line-height: 1;
  border: 1px solid #e5e5e5;
  svg {
    margin-left: 10px;
  }
`

export default Twitter

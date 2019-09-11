import * as React from 'react'
import styled from '@emotion/styled'

const Background: React.FC = () => (
  <Root>
    <Border1 />
    <Border2 />
    <Border3 />
    <Border4 />
    <Border5 />
    <Border6 />
  </Root>
)

const size = 64
const Root = styled.h1`
  width: 100%;
  height: 100%;
`
const Border1 = styled.div`
  position: absolute;
  top: 0;
  left: ${size}px;
  width: 1px;
  height: 9px;
  background: #e5e5e5;
`
const Border2 = styled(Border1)`
  top: 62px;
  height: calc(100% - 75px);
`
const Border3 = styled(Border1)`
  top: 0;
  left: calc((100% - ${size * 2 + 2}px) / 3 + ${size + 1}px);
  height: 14px;
`
const Border4 = styled(Border1)`
  top: 62px;
  left: calc((100% - ${size * 2 + 2}px) / 3 + ${size + 1}px);
  height: calc(100% - 75px);
`
const Border5 = styled(Border1)`
  top: 0;
  left: calc((100% - ${size * 2 + 2}px) / 3 * 2 + ${size + 1}px);
  height: 100%;
`
const Border6 = styled(Border1)`
  top: 0;
  left: auto;
  right: ${size}px;
  height: 100%;
`

export default Background

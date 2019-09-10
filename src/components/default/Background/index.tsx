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

const Root = styled.h1`
  width: 100%;
  height: 100%;
`
const Border1 = styled.div`
  position: absolute;
  top: 0;
  left: 50px;
  width: 1px;
  height: 15px;
  background: #e5e5e5;
`
const Border2 = styled(Border1)`
  top: 75px;
  height: calc(100% - 75px);
`
const Border3 = styled(Border1)`
  top: 0;
  left: calc((100% - 102px) / 3 + 51px);
  height: 22px;
`
const Border4 = styled(Border1)`
  top: 75px;
  left: calc((100% - 102px) / 3 + 51px);
  height: calc(100% - 75px);
`
const Border5 = styled(Border1)`
  top: 0;
  left: calc((100% - 102px) / 3 * 2 + 51px);
  height: 100%;
`
const Border6 = styled(Border1)`
  top: 0;
  left: auto;
  right: 50px;
  height: 100%;
`

export default Background

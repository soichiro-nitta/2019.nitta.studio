import * as React from 'react'
import styled from '@emotion/styled'

const Background: React.FC = () => {
  const border7 = React.useRef(null)
  React.useEffect(() => {
    const main = document.getElementById('main')
    const scrollMax = main.scrollHeight - main.clientHeight
    main.addEventListener('scroll', () => {
      border7.current.style.transform = `scaleY(${main.scrollTop / scrollMax})`
    })
  })
  return (
    <Root>
      <Border1 />
      <Border2 />
      <Border3 />
      <Border4 />
      <Border5 />
      <Border6 />
      <Border7 ref={border7} />
    </Root>
  )
}

const size = 65
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
  top: ${size}px;
  height: calc(100% - ${size}px);
`
const Border3 = styled(Border1)`
  top: 0;
  left: calc((100% - ${size * 2 + 2}px) / 3 + ${size + 1}px);
  height: 12px;
`
const Border4 = styled(Border1)`
  top: ${size}px;
  left: calc((100% - ${size * 2 + 2}px) / 3 + ${size + 1}px);
  height: calc(100% - ${size}px);
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
const Border7 = styled(Border1)`
  top: 0;
  left: auto;
  right: ${size}px;
  height: 100%;
  background: #9d9d9d;
  transform: scaleY(0);
  transform-origin: top center;
`

export default Background

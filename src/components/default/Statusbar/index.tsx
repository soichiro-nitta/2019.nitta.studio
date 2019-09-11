import * as React from 'react'
import styled from '@emotion/styled'

const Statusbar: React.FC = () => {
  const scrollbar = React.useRef(null)
  React.useEffect(() => {
    const main = document.getElementById('main')
    const scrollMax = main.scrollHeight - main.clientHeight
    main.addEventListener('scroll', () => {
      scrollbar.current.style.transform = `scaleX(${main.scrollTop /
        scrollMax})`
    })
  })
  return (
    <Root>
      <ScrollbarBackground />
      <Scrollbar ref={scrollbar} />
    </Root>
  )
}

const Root = styled.h1`
  width: 100%;
  height: 100%;
`
const Scrollbar = styled.div`
  position: absolute;
  left: 20px;
  bottom: 31.5px;
  width: 25px;
  height: 2px;
  background: #555;
  transform: scalex(0);
  transform-origin: left center;
`
const ScrollbarBackground = styled(Scrollbar)`
  background: #bababa;
  transform: none;
`

export default Statusbar
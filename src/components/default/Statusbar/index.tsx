import * as React from 'react'
import styled from '~/utils/emotion'

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
    <>
      <ScrollbarBackground />
      <Scrollbar ref={scrollbar} />
    </>
  )
}

const Scrollbar = styled.div`
  position: absolute;
  /* left: 23.5px; */
  left: ${(props): number => (props.theme.sizes.phone.dashboard - 18) / 2}px;
  bottom: ${(props): number => (props.theme.sizes.phone.dashboard - 2) / 2}px;
  width: 18px;
  height: 2px;
  background: #555;
  transform: scaleX(0);
  transform-origin: left center;
`
const ScrollbarBackground = styled(Scrollbar)`
  background: #b5b5b5;
  transform: none;
`

export default Statusbar

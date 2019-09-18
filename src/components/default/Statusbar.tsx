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
      <Loader viewBox="25 25 50 50">
        <Circle cx="50" cy="50" r="20" />
      </Loader>
    </>
  )
}

const width = 18
const Scrollbar = styled.div`
  position: absolute;
  left: ${(props): number => (props.theme.sizes.phone.dashboard - width) / 2}px;
  bottom: ${(props): number => (props.theme.sizes.phone.dashboard - 2) / 2}px;
  width: ${width}px;
  height: 2px;
  background: #555;
  transform: scaleX(0);
  transform-origin: left center;
`
const ScrollbarBackground = styled(Scrollbar)`
  background: #b5b5b5;
  transform: none;
`
const Loader = styled.svg`
  position: absolute;
  left: ${(props): number =>
    (props.theme.sizes.phone.dashboard - width - 2) / 2}px;
  bottom: ${(props): number =>
    (props.theme.sizes.phone.dashboard - width - 2) / 2}px;
  width: ${width + 2}px;
  height: ${width + 2}px;
  transform-origin: center center;
  animation: rotate 1.2s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`
const Circle = styled.circle`
  fill: none;
  stroke-width: 5;
  stroke-dasharray: 150, 200;
  stroke-dashoffset: -10;
  animation: dash 0.9s ease-in-out infinite;
  stroke: #555;
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
`

export default Statusbar

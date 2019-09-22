import * as React from 'react'
import styled from '~/utils/emotion'
import Layout from '~/layouts/default'
import SEO from '~/components/base/Seo'
import Twitter from '~/components/index/Twitter'

const IndexPage: React.FC = () => {
  const video = React.useRef(null)
  React.useEffect(() => {
    video.current.load()
    video.current.play()
  })
  return (
    <Layout>
      <SEO title="Home" />
      <P>
        Designer & <a href="/test">Developer </a>
        新田聡一郎の活動報告をしているサイトです。
      </P>
      <TwitterWrapper>
        <Twitter />
      </TwitterWrapper>
      <VideoWrapper>
        <video
          ref={video}
          src="video.mp4"
          preload="none"
          muted
          playsInline
          loop
        />
      </VideoWrapper>
      <P>
        新田聡一郎（にった そういちろう）。
        1994年生まれ・男。埼玉県在住・埼玉県出身。ウェブサイト、アプリケーション制作等。
        「Nitta.Studio」は新田聡一郎が活動報告のために個人的に制作、管理しているホームページです。
        <br />
        <br />
        マシン環境 iMac Pro 3.2 GHz Intel Xeon W<br />
        Visual Studio Code ほか
      </P>
    </Layout>
  )
}

const TwitterWrapper = styled.div`
  margin-top: 12px;
`
const VideoWrapper = styled.div`
  margin: ${(props): number => (props.theme.sizes.phone.dashboard - 18) / 2}px 0;
  margin-left: -${(props): number => (props.theme.sizes.phone.dashboard - 18) / 2}px;
  padding: ${(props): number => (props.theme.sizes.phone.dashboard - 18) / 2}px
    0;
  padding-right: ${(props): number =>
    (props.theme.sizes.phone.dashboard - 18) / 2}px;
  width: calc(
    100% + ${(props): number => props.theme.sizes.phone.dashboard - 18}px
  );
  height: 210px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* opacity: 0; */
  }
`
const P = styled.p`
  ${(props): string => props.theme.mixins.lhCrop(2)}
`

export default IndexPage

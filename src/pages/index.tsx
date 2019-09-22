import * as React from 'react'
import { Link } from 'gatsby'
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
      Designer & Developer 新田聡一郎の活動報告をしているサイトです。
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
      <Title>Soichiro Nitta</Title>
      1994年生まれ・男。埼玉県在住・埼玉県出身。ウェブサイト、アプリケーション制作等。
      「Nitta.Studio」は新田聡一郎が活動報告のために個人的に制作、管理しているホームページです。
      <br />
      <br />
      iMac Pro 3.2 GHz Intel Xeon W<br />
      Visual Studio Code <br />
      <br />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

const TwitterWrapper = styled.div`
  margin-top: 12px;
`
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 1;
  margin-bottom: 10px;
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

export default IndexPage

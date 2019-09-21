import * as React from 'react'
// import { Link } from 'gatsby'
import styled from '~/utils/emotion'
import Layout from '~/layouts/default'
import Image from '~/components/base/Image'
import SEO from '~/components/base/Seo'

const IndexPage: React.FC = () => {
  const video = React.useRef(null)
  React.useEffect(() => {
    video.current.load()
    video.current.play()
  })
  return (
    <Layout>
      <SEO title="Home" />
      Designer & Developer 新田聡一郎の活動報告をしていくサイトです。
      <Twitter
        href="https://twitter.com/soichiro_nitta"
        target="_blank"
        rel="noopener noreferrer"
      >
        近況報告はTwitterにて　→
      </Twitter>
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
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
        またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
      </p>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      {/* <link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

const ImageWrapper = styled.div`
  margin-top: 30px;
  width: 150px;
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
const Twitter = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #e5e5e5;
  line-height: 1;
`

export default IndexPage

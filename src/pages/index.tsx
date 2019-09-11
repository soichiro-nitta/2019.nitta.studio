import * as React from 'react'
// import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '~/layouts/default'
import Image from '~/components/base/Image'
import SEO from '~/components/base/Seo'

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    はじめまして新田聡一郎です。
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
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

const ImageWrapper = styled.div`
  margin-top: 30px;
  width: 150px;
`

export default IndexPage

import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-group1">
        <div className="home-frame2">
          <img
            alt="Background12"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/external/background12-0tj-2000w.webp"
            srcSet="external//background12-0tj-2000w.webp 1200w, external/background12-0tj-tablet.webp 800w, external/background12-0tj-mobile.webp 480w"
            className="home-background"
          />
          <img
            alt="Title23"
            src="/external/title23-yx25-300h.webp"
            className="home-title"
          />
          <img
            alt="Mint24"
            src="/external/mint24-hay-200h.webp"
            className="home-mint"
          />
          <Link to="/play" className="home-navlink">
            <img
              alt="Play25"
              src="/external/play25-zqh-200h.webp"
              className="home-play"
            />
          </Link>
          <img
            alt="Buy27"
            src="/external/buy27-ge7p-200h.webp"
            className="home-buy"
          />
          <a
            href="https://t.me/Chill_Pill_Fi_Group"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <img
              alt="Telegram212"
              src="/external/telegram212-vda9-200w.webp"
              className="home-telegram"
            />
          </a>
          <a
            href="https://twitter.com/chillpillfi"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            <img
              alt="Twitter213"
              src="/external/twitter213-c3g-200h.webp"
              className="home-twitter"
            />
          </a>
          <img
            alt="Docs214"
            src="/external/docs214-7a6g-200w.webp"
            className="home-docs"
          />
          <img
            alt="DexScreener215"
            src="/external/dexscreener215-mg4b-200h.webp"
            className="home-dex-screener"
          />
          <img
            alt="ChillFlag218"
            sizes="(min-width: 768px) 800px, 480px"
            src="/external/chillflag218-4lb5-600h.webp"
            srcSet="external//chillflag218-4lb5-600h.webp 800w, external/chillflag218-4lb5-mobile.webp 480w"
            className="home-chill-flag"
          />
          <img
            sizes="(min-width: 768px) 800px, 480px"
            src="/kirpill_with_chill_flag-600h.webp"
            srcSet="/kirpill_with_chill_flag-600h.webp 800w, /kirpill_with_chill_flag-mobile.webp 480w"
            className="home-blue-kirby"
          />
        </div>
      </div>
    </div>
  )
}

export default Home

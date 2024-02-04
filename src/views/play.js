import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './play.css'

const Play = (props) => {
  return (
    <div className="play-container">
      <Helmet>
        <title>play - exported project</title>
        <meta property="og:title" content="play - exported project" />
      </Helmet>
      <div className="play-frame1">
        <img
          alt="Background224"
          sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
          src="/external/background224-y3o7-1300h.webp"
          srcSet="external//background224-y3o7-1300h.webp 1200w, external/background224-y3o7-tablet.webp 800w, external/background224-y3o7-mobile.webp 480w"
          className="play-background"
        />
        <img
          alt="Title223"
          src="/external/title223-3har-300h.webp"
          className="play-title"
        />
        <Link to="/" className="play-navlink">
          <img
            alt="Home325"
            src="/external/home325-hxr-200h.webp"
            className="play-home"
          />
        </Link>
        <img
          alt="Food327"
          sizes="(min-width: 768px) 800px, 480px"
          src="/external/food327-fads-700h.webp"
          srcSet="external//food327-fads-700h.webp 800w, external/food327-fads-mobile.webp 480w"
          className="play-food"
        />
        <img
          alt="IMAGE1328"
          src="/external/image1328-wdfd-200h.webp"
          className="play-image1"
        />
        <img
          alt="IMAGE2329"
          src="/external/image2329-4lbc-200h.webp"
          className="play-image2"
        />
        <img
          alt="IMAGE3330"
          src="/external/image3330-j17-200h.webp"
          className="play-image3"
        />
      </div>
    </div>
  )
}

export default Play

import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './game.css'

const Game = (props) => {
  return (
    <div className="game-container">
      <Helmet>
        <title>game - exported project</title>
        <meta property="og:title" content="game - exported project" />
      </Helmet>
      <div className="game-frame1">
        <img
          alt="Background745"
          sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
          src="/external/background745-jjj8-1100h.webp"
          srcSet="external//background745-jjj8-1100h.webp 1200w, external/background745-jjj8-tablet.webp 800w, external/background745-jjj8-mobile.webp 480w"
          className="game-background"
        />
        <img
          alt="Title746"
          src="/external/title746-j038-300h.webp"
          className="game-title"
        />
        <Link to="/" className="game-navlink">
          <img
            alt="Home747"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c5369e0a-9aaf-4608-869b-2bf39a3b7a49/7295b30a-4434-4ac6-9b75-a507aa2956fa?org_if_sml=12224&amp;force_format=original"
            className="game-home"
          />
        </Link>
        <img
          alt="RedFridge7414"
          sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
          src="/external/redfridge7414-c70i-900h.webp"
          srcSet="external//redfridge7414-c70i-900h.webp 1200w, external/redfridge7414-c70i-tablet.webp 800w, external/redfridge7414-c70i-mobile.webp 480w"
          className="game-red-fridge"
        />
        <img
          alt="BlueFridge7415"
          sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
          src="/external/bluefridge7415-sno9-900h.webp"
          srcSet="external//bluefridge7415-sno9-900h.webp 1200w, external/bluefridge7415-sno9-tablet.webp 800w, external/bluefridge7415-sno9-mobile.webp 480w"
          className="game-blue-fridge"
        />
        <img
          alt="Unstaked7516"
          src="/external/unstaked7516-bjz5-200h.webp"
          className="game-unstaked"
        />
        <img
          alt="Staked7517"
          src="/external/staked7517-uqh8-200h.webp"
          className="game-staked"
        />
        <img
          alt="Stake7519"
          src="/external/stake7519-0q7-200h.webp"
          className="game-stake"
        />
        <img
          alt="Claim7518"
          src="/external/claim7518-269p-200h.webp"
          className="game-claim"
        />
      </div>
    </div>
  )
}

export default Game
